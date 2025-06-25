import Order from "../models/Order.js";
import OrderItem from "../models/OrderItem.js";
import Product from "../models/Product.js";
import User from "../models/User.js";
import {sequelize} from "../db.js";

export const createOrder = async (datos) => {
  const transaction = await sequelize.transaction();
  try {
    const { items, ...ordenData } = datos;

    // 1. Verificar el stock de todos los productos
    for (const item of items) {
      const product = await Product.findOne({
        where: { id: item.product_id },
        transaction
      });

      if (!product) {
        throw new Error(`Producto con ID ${item.product_id} no encontrado`);
      }

      if (product.stock < item.quantity) {
        throw new Error(`Stock insuficiente para el producto ${product.name} (ID: ${product.id}). Stock disponible: ${product.stock}, cantidad solicitada: ${item.quantity}`);
      }
    }

    // 2. Crear la orden
    const nuevaOrden = await Order.create({
      user_id: ordenData.user_id,
      total: ordenData.total,
      shippingAddress: ordenData.shippingAddress,
      paymentMethod: ordenData.paymentMethod,
      status: ordenData.status || "pending",
      orderDate: ordenData.orderDate || new Date(),
    }, { transaction });

    // 3. Crear los items de la orden y actualizar el stock
    if (items && items.length > 0) {
      const orderItems = items.map((item) => ({
        order_id: nuevaOrden.id,
        product_id: item.product_id,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
      }));

      await OrderItem.bulkCreate(orderItems, { transaction });

      // Actualizar el stock de cada producto
      for (const item of items) {
        await Product.decrement('stock', {
          by: item.quantity,
          where: { id: item.product_id },
          transaction
        });
      }
    }

    // Si todo sale bien, confirmar la transacción
    await transaction.commit();
    return nuevaOrden;
  } catch (error) {
    // Si hay algún error, deshacer todos los cambios
    await transaction.rollback();
    console.error("Error en createOrder:", error.message);
    throw new Error(error.message || "Error al crear la orden en la base de datos");
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
