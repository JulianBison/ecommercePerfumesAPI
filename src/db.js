import { Sequelize } from "sequelize";
import { DB_TYPE, DB_STORAGE } from "./config.js";

export const sequelize = new Sequelize({
  dialect: DB_TYPE,
  storage: DB_STORAGE,
  logging: true,
  define: {
    timestamps: false,
  },
});
