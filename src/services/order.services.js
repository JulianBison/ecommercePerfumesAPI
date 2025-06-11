import Order from "../models/Order.js";
import OrderItem from "../models/OrderItem.js";
import Product from "../models/Product.js";

export const createOrder = async (datos) => {
  try {
    const { items, ...ordenData } = datos;

    // Crear la orden sin incluir los items directamente
    const nuevaOrden = await Order.create(ordenData);

    // Agregar los items después de crear la orden
    if (items && items.length > 0) {
      const orderItems = items.map((item) => ({
        orderId: nuevaOrden.id, // Relaciona los items con la orden recién creada
        productoId: item.productoId,
        cantidad: item.cantidad,
        precio: item.precio,
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
