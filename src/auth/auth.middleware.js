import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  try {
    console.log("Headers recibidos:", req.headers); // linea a eliminar
    const token = req.headers.authorization?.split(" ")[1];
    console.log("Token recibido:", token); // linea a eliminar
    if (!token)
      return res.status(401).json({ error: "Acceso denegado, token faltante" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token decodificado:", decoded); // linea a eliminar

    req.userId = decoded.id;
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    next();
  } catch (error) {
    console.error("Error en verifyToken: ", error.message); // linea a eliminar
    res.status(401).json({ error: "Token inválido o expirado" });
  }
};
