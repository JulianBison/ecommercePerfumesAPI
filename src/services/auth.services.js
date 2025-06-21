import User from "..//models/User.js";
import Role from "..//models/Role.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const loginUser = async ({ email, password }) => {
  const user = await User.scope(null).findOne({
    where: { email },
    attributes: [
      "id",
      "first_name",
      "last_name",
      "email",
      "address",
      "password",
      "role_id",
      "active"
    ],
    include: [
      {
        model: Role,
        attributes: ["name"],
      },
    ],
  });

  console.log("Usuario encontrado:", user?.toJSON());
  //console.log("Password ingresada:", password);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    const error = new Error("Credenciales Invalidas");
    error.status = 401;
    throw error;
  }
  if (!user.active) {
    const error = new Error("Cuenta inactiva. Contacta al administrador");
    error.status = 403; // 403 Forbidden
    throw error;
  } 

  const payload = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    address: user.address,
    role: user.Role?.name || "user",
    
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  return { token, user: payload };
};

export const registerUser = async ({
  first_name,
  last_name,
  email,
  password,
}) => {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    const error = new Error("El correo ya está registrado");
    error.status = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    first_name,
    last_name,
    email,
    password: hashedPassword,
    role_id: 2,
  });

  // Obtener usuario con role para incluir nombre del role
  const userWithRole = await User.findOne({
    where: { id: newUser.id },
    include: [{ model: Role, attributes: ["name"] }],
  });

  const payload = {
    id: userWithRole.id,
    first_name: userWithRole.first_name,
    last_name: userWithRole.last_name,
    email: userWithRole.email,
    role: userWithRole.Role?.name || "user",
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  return { token, user: payload };
};
