import Order from "../models/Order.js";
import OrderItem from "../models/OrderItem.js";
import Product from "../models/Product.js";

export const createOrder = async (datos) => {
  return await Order.create(datos, {
    include: [{ model: OrderItem, as: "items" }],
  });
};

export const getAllOrder = async () => {
  return await Order.findAll({
    include: [{ model: OrderItem, include: [Product] }],
  });
};

export const getOrderById = async (id) => {
  return await Order.findByPk(id, {
    include: [{ model: OrderItem, include: [Product] }],
  });
};

export const updateOrder = async (id, datos) => {
  const orden = await Order.findByPk(id);
  if (!orden) return null;
  await orden.update(datos);
  return orden;
};

export const deleteOrder = async (id) => {
  const orden = await Order.findByPk(id);
  if (!orden) return null;
  await orden.destroy();
  return orden;
};
