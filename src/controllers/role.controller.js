import {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} from "../services/role.services.js";

export const listRoles = async (req, res) => {
  try {
    const roles = await getAllRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo roles" });
  }
};

export const showRole = async (req, res) => {
  try {
    const role = await getRoleById(req.params.id);
    if (!role) return res.status(404).json({ error: "Rol incorrecto" });
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo rol " });
  }
};

export const addRole = async (req, res) => {
  try {
    const role = await createRole(req.body);
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ error: "Error creando rol" });
  }
};

export const editRole = async (req, res) => {
  try {
    const role = await updateRole(req.params.id, req.body);
    if (!role) return res.status(404).json({ error: "Rol incorrecto" });
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: "Error al editar rol" });
  }
};

export const removeRole = async (req, res) => {
  try {
    const role = await deleteRole(req.params.id);
    if (!role) return res.status(404).json({ error: "Rol incorrecto" });
    res.json({ message: "Role deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error al borrar rol" });
  }
};
