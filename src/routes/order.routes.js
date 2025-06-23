import { Router } from "express";
import { verifyToken } from "../auth/auth.middleware.js";
import { verifyRole } from "../auth/roles.middleware.js";
import {
  getUserOrders,
  listOrders,
  showOrder,
  editOrder,
  removeOrder,
} from "../controllers/order.controller.js";

const router = Router();

router.get("/user", verifyToken, getUserOrders);

router.get("/", verifyToken, verifyRole("admin"), listOrders);

router.get("/:id", showOrder);
router.put("/:id", editOrder);
router.delete("/:id", removeOrder);

export default router;
