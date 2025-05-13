import { Router } from "express";
import {
  listOrderItems,
  showOrderItem,
  addOrderItem,
  editOrderItem,
  removeOrderItem,
} from "../controllers/orderItem.controller.js";

const router = Router();

router.get("/", listOrderItems);
router.get("/:id", showOrderItem);
router.post("/", addOrderItem);
router.put("/:id", editOrderItem);
router.delete("/:id", removeOrderItem);

export default router;
