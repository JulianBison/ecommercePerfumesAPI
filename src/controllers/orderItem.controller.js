import {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
} from "../services/orderItem.services.js";

export const listOrderItems = async (req, res) => {
  try {
    const items = await getAllOrderItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error fetching order items" });
  }
};

export const showOrderItem = async (req, res) => {
  try {
    const item = await getOrderItemById(req.params.id);
    if (!item) return res.status(404).json({ error: "Order item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Error fetching order item" });
  }
};

export const addOrderItem = async (req, res) => {
  try {
    const item = await createOrderItem(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: "Error creating order item" });
  }
};

export const editOrderItem = async (req, res) => {
  try {
    const item = await updateOrderItem(req.params.id, req.body);
    if (!item) return res.status(404).json({ error: "Order item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Error updating order item" });
  }
};

export const removeOrderItem = async (req, res) => {
  try {
    const item = await deleteOrderItem(req.params.id);
    if (!item) return res.status(404).json({ error: "Order item not found" });
    res.json({ message: "Order item deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting order item" });
  }
};
