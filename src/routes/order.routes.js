import { Router } from "express";
import { verifyToken } from "../auth/auth.middleware.js";
import {
  getUserOrders,
  listOrders,
  showOrder,
  editOrder,
  removeOrder,
} from "../controllers/order.controller.js";

const router = Router();

router.get("/user", verifyToken, getUserOrders);

router.get("/", listOrders);
router.get("/:id", showOrder);
router.put("/:id", editOrder);
router.delete("/:id", removeOrder);

export default router;
