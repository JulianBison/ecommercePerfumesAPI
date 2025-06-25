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
    ],
    include: [
      {
        model: Role,
        attributes: ["name"],
      },
    ],
  });

  console.log("Usuario encontrado:", user?.toJSON()); // linea a eliminar
  console.log("Password ingresada:", password); // linea a eliminar

  if (!user || !(await bcrypt.compare(password, user.password))) {
    const error = new Error("Constraseñas inválidas");
    error.status = 401;
    throw error;
  }

  const payload = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    address: user.address,
    role: user.Role?.name || "admin",
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  return { token, user: payload };
};

export const registerUser = async ({
  first_name,
  last_name,
  email,
  password,
  address,
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
    address,
    role_id: 1,
  });

  const userWithRole = await User.findOne({
    where: { id: newUser.id },
    include: [{ model: Role, attributes: ["name"] }],
  });

  const payload = {
    id: userWithRole.id,
    first_name: userWithRole.first_name,
    last_name: userWithRole.last_name,
    email: userWithRole.email,
    address: userWithRole.address,
    role: userWithRole.Role?.name || "user",
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  return { token, user: payload };
};
