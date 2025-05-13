import express from "express";
import {
  listProducts,
  showProduct,
  addProduct,
  editProduct,
  removeProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", listProducts);

router.get("/:id", showProduct);

router.post("/", addProduct);

router.put("/:id", editProduct);

router.delete("/:id", removeProduct);

export default router;
