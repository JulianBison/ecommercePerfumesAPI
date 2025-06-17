import User from "../models/User.js";
import bcrypt from "bcrypt";

export const createUser = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await User.create({
      ...data,
      password: hashedPassword,
    });
    return user;
  } catch (error) {
    console.error("Error en createUser:", error);
    throw error;
  }
};

export const getAllUsers = async () => {
  return await User.findAll();
};

export const getUserById = async (id) => {
  return await User.findByPk(id);
};

export const updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) return null;
  await user.update(data);
  return user;
};

export const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return null;
  await user.destroy();

  return user;
};
