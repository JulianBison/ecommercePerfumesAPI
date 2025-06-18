// src/app.js
import express from "express";
import { PORT } from "./config.js";
import { sequelize } from "../db.js";

import "./models/relations.js";

import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";
import orderRoutes from "./routes/order.routes.js";
import roleRoutes from "./routes/role.routes.js";
import orderItemRoutes from "./routes/orderItem.routes.js";

import authRoutes from "./routes/auth.routes.js";

import cors from "cors";

import { verifyToken } from "./auth/auth.middleware.js";
import { checkRole } from "./auth/roles.middleware.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Rutas públicas para autenticación
app.use("/api/auth", authRoutes);

// Rutas protegidas con token
app.use("/api/products", verifyToken, productRoutes);
app.use("/api/order", verifyToken, orderRoutes);
app.use("/api/users", verifyToken, userRoutes);
app.use("/api/orderItems", verifyToken, orderItemRoutes);

// Rutas protegidas con token y solo para admins
app.use("/api/roles", verifyToken, roleRoutes);

async function main() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error en la inicialización:", error.message);
  }
}

main();
