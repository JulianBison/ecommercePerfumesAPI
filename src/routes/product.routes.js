import { Router } from "express";
import {
  listProducts,
  showProduct,
  addProduct,
  editProduct,
  removeProduct,
} from "../controllers/product.controller.js";
import { verifyToken } from "../auth/auth.middleware.js";
import { verifyRole } from "../auth/roles.middleware.js";

const router = Router();

router.get("/", listProducts);
router.get("/:id", verifyToken,verifyRole("admin","superadmin"), showProduct);
router.post("/", verifyToken,verifyRole("admin","superadmin"), addProduct);
router.put("/:id", verifyToken,verifyRole("admin","superadmin"), editProduct);
router.delete("/:id", verifyToken,verifyRole("admin","superadmin") ,removeProduct);

export default router;

