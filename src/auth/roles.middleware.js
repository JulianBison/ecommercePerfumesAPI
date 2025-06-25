export const verifyRole = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role;

    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Acceso denegado" });
    }

    next();
  };
};

export const verifyRoleOrOwnership = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      if (!req.user || !req.user.id) {
        return res.status(401).json({ error: "Autenticación requerida" });
      }

      if (allowedRoles.includes(req.user.role)) {
        return next();
      }

      if (req.params.id && req.params.id != req.user.id) {
        return res.status(403).json({ error: "Acceso no autorizado" });
      }
      next();

    } catch (error) {
      console.error("Error en verifyOwnership:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  };
};
