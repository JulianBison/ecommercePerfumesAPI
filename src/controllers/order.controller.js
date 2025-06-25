import {
  getAllOrder,
  getOrdersById,
  updateOrder,
  deleteOrder,
  createOrder,
} from "../services/order.services.js";

export const createOrderController = async (req, res) => {
  try {
    const userId = req.userId;
    const { items, total, shippingAddress, paymentMethod } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: "No hay productos en la orden" });
    }

    const nuevaOrden = await createOrder({
      user_id: userId,
      total,
      shippingAddress,
      paymentMethod,
      items,
    });

    res.status(201).json(nuevaOrden);
  } catch (error) {
    console.error("Error al crear la orden:", error.message);
    res.status(500).json({ error: "Error al crear la orden" });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const userId = req.userId;
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
