import dotenv from "dotenv";

dotenv.config();

export const PORT = 3000;
export const DB_TYPE = process.env.DB_TYPE;
export const DB_STORAGE = process.env.DB_STORAGE;
export const JWT_SECRET = process.env.JWT_SECRET;
