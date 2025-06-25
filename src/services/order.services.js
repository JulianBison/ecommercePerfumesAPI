import Order from "../models/Order.js";
import OrderItem from "../models/OrderItem.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

export const createOrder = async (datos) => {
  try {
    const { items, ...ordenData } = datos;

    const nuevaOrden = await Order.create({
      user_id: ordenData.user_id,
      total: ordenData.total,
      shippingAddress: ordenData.shippingAddress,
      paymentMethod: ordenData.paymentMethod,
      status: ordenData.status || "pending",
      orderDate: ordenData.orderDate || new Date(),
    });

    if (items && items.length > 0) {
      const orderItems = items.map((item) => ({
        order_id: nuevaOrden.id,
        product_id: item.product_id,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
      }));

      await OrderItem.bulkCreate(orderItems);
    }

    return nuevaOrden;
  } catch (error) {
    console.error("Error en createOrder:", error.message);
    throw new Error("Error al crear la orden en la base de datos");
  }
};

export const getAllOrder = async () => {
  return await Order.findAll({
    include: [
      {
        model: OrderItem,
        as: "items",
        include: [Product],
      },
      {
        model: User,
        attributes: ["first_name", "last_name", "email"],
      },
    ],
  });
};

export const getOrdersById = async (id) => {
  return await Order.findAll({
    where: { user_id: id },
    include: [
      {
        model: OrderItem,
        as: "items",
        include: [Product],
      },
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
    order: [["orderDate", "DESC"]],
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

  await OrderItem.destroy({ where: { order_id: id } });

  await orden.destroy();

  return orden;
};
