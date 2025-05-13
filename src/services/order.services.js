import Order from "../model/Order.js";
import OrderItem from "./../model/OrderItem.js";
import Product from "./../model/Product.js";

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
  if (orden) {
    return await orden.update(datos);
  }
  return null;
};

export const deleteOrder = async (id) => {
  const orden = await Order.findByPk(id);
  if (orden) {
    return await orden.destroy();
  }
  return null;
};
