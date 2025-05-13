import User from "../model/User.js";

export const createUser = async (data) => {
  return await User.create(data);
};

export const getAllUsers = async () => {
  return await User.findAll();
};

export const getUserById = async (id) => {
  return await User.findByPk(id);
};

export const updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  if (user) {
    return await user.update(data);
  }
  return null;
};

export const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (user) {
    return await user.destroy();
  }
  return null;
};
