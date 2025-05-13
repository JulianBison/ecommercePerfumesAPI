import OrderItems from "../models/OrderItem.js";

export const createOrderItem = async (data) => {
  return await OrderItems.create(data);
};

export const getAllOrderItems = async () => {
  return await OrderItems.findAll();
};

export const getOrderItemById = async (id) => {
  return await OrderItems.findByPk(id);
};

export const updateOrderItem = async (id, data) => {
  const orderItem = await OrderItems.findByPk(id);
  if (!orderItem) return null;
  await orderItem.update(data);
  return orderItem;
};

export const deleteOrderItem = async (id) => {
  const orderItem = await OrderItems.findByPk(id);
  if (!orderItem) return null;
  await orderItem.destroy();
  return orderItem;
};
