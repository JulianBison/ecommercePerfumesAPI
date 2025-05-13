import {
  getAllOrder,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../services/order.services.js";

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

export const addOrder = async (req, res) => {
  try {
    const order = await createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al crear la orden", detalle: error.message });
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
