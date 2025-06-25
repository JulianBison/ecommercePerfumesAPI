import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },

    orderDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.ENUM(
        "pending",
        "processing",
        "shipped",
        "completed",
        "canceled"
      ),
      defaultValue: "pending",
    },
    total: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    shippingAddress: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "orders",
    timestamps: false,
  }
);

export default Order;
