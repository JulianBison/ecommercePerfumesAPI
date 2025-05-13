import { Router } from "express";
import {
  listOrders,
  showOrder,
  addOrder,
  editOrder,
  removeOrder,
} from "../controllers/order.controller.js";

const router = Router();

router.get("/", listOrders);
router.get("/:id", showOrder);
router.post("/", addOrder);
router.put("/:id", editOrder);
router.delete("/:id", removeOrder);

export default router;
