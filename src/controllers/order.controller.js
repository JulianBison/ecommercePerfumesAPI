import {
  getAllOrder,
  getOrdersById,
  updateOrder,
  deleteOrder,
} from "../services/order.services.js";

export const getUserOrders = async (req, res) => {
  try {
    const userId = req.userId; // Lo extrae del token
    const orders = await getOrdersById(userId);
    res.json(orders);
  } catch (error) {
    console.error("Error al obtener órdenes del usuario:", error.message);
    res.status(500).json({ error: "Error al obtener las órdenes" });
  }
};

export const listOrders = async (req, res) => {
  try {
    const orders = await getAllOrder();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las órdenes" });
  }
};

export const showOrder = async (req, res) => {
  try {
    const order = await getOrderById(req.params.id);
    if (!order) return res.status(404).json({ error: "Orden no encontrada" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar la orden" });
  }
};

export const editOrder = async (req, res) => {
  try {
    const order = await updateOrder(req.params.id, req.body);
    if (!order) return res.status(404).json({ error: "Orden no encontrada" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la orden" });
  }
};

export const removeOrder = async (req, res) => {
  try {
    const order = await deleteOrder(req.params.id);
    if (!order) return res.status(404).json({ error: "Orden no encontrada" });
    res.json({ message: "Orden eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la orden" });
  }
};
