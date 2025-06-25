import { Router } from "express";
import { verifyToken } from "../auth/auth.middleware.js";
import { verifyRole } from "../auth/roles.middleware.js";
import {
  getUserOrders,
  createOrderController,
  listOrders,
  showOrder,
  editOrder,
  removeOrder,
} from "../controllers/order.controller.js";

const router = Router();

router.post("/", verifyToken, createOrderController);
router.get("/user", verifyToken, getUserOrders);
router.get("/", verifyToken,verifyRole("admin","superadmin"), listOrders);
router.get("/:id", showOrder);
router.put("/:id",verifyRole("admin","superadmin"), editOrder);
router.delete("/:id",verifyRole("admin","superadmin"), removeOrder);

export default router;
