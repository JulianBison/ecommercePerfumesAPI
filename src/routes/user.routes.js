import { Router } from "express";
import {
  listUsers,
  showUser,
  addUser,
  editUser,
  removeUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../auth/auth.middleware.js";
import { checkRole } from "../auth/roles.middleware.js";

const router = Router();

router.get("/", verifyToken, checkRole("user"), listUsers);
router.get("/:id", showUser);
router.post("/", addUser);
router.put("/:id", editUser);
router.delete("/:id", removeUser);

export default router;
