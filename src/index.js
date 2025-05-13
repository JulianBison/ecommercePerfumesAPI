import express from "express";

import { PORT } from "./config.js";
import { sequelize } from "./db.js";

import "./models/relations.js";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";
import orderRoutes from "./routes/order.routes.js";
import roleRoutes from "./routes/role.routes.js";
import orderItemRoutes from "./routes/orderItem.routes.js";

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/orderItems", orderItemRoutes);

async function main() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ There was an error on initialization:", error.message);
  }
}

main();
