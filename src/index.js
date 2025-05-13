import express from "express";

import { PORT } from "./config.js";
import { sequelize } from "./db.js";

import "./model/relations.js";

import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(express.json());
app.use("/products", productRoutes);

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
