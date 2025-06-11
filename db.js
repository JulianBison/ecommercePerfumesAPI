import { Sequelize } from "sequelize";
import { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } from "./src/config.js";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
});
