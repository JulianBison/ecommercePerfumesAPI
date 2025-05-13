import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    brand: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    mainImage: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    creationDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

export default Product;
