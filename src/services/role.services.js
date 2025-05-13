import Role from "../models/Role.js";

export const getAllRoles = async () => {
  return await Role.findAll();
};

export const getRoleById = async (id) => {
  return await Role.findByPk(id);
};

export const createRole = async (data) => {
  return await Role.create(data);
};

export const updateRole = async (id, data) => {
  const role = await Role.findByPk(id);
  if (!role) return null;
  await role.update(data);
  return role;
};

export const deleteRole = async (id) => {
  const role = await Role.findByPk(id);
  if (!role) return null;
  await role.destroy();
  return role;
};
