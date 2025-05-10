import express from "express";

import { PORT } from "./config.js";
import { sequelize } from "./db.js";
import bookRoutes from "./routes/books.routes.js";

import "./model/Role.js";
import "./model/User.js";
import "./model/Product.js";
import "./model/Order.js";
import "./model/OrderDetail.js";

import "./model/relations.js";

const app = express();

app.use(express.json());
app.use(bookRoutes);

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
