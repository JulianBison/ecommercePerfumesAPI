import { Router } from "express";
import {
  listUsers,
  showUser,
  addUser,
  editUser,
  removeUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", listUsers);
router.get("/:id", showUser);
router.post("/", addUser);
router.put("/:id", editUser);
router.delete("/:id", removeUser);

export default router;
