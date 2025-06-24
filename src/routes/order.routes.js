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
import { createOrder } from "../services/order.services.js";

const router = Router();

router.post("/", verifyToken, createOrderController);

router.get("/user", verifyToken, getUserOrders);

router.get("/", verifyToken, listOrders);

router.get("/:id", showOrder);
router.put("/:id", editOrder);
router.delete("/:id", removeOrder);

export default router;
