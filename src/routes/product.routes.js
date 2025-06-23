import { Router } from "express";
import {
  listProducts,
  showProduct,
  addProduct,
  editProduct,
  removeProduct,
} from "../controllers/product.controller.js";
import { verifyToken } from "../auth/auth.middleware.js";

const router = Router();

router.get("/", listProducts);
router.get("/:id", verifyToken, showProduct);
router.post("/", verifyToken, addProduct);
router.put("/:id", verifyToken, editProduct);
router.delete("/:id", verifyToken, removeProduct);

export default router;

