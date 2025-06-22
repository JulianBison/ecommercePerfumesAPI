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

router.get("/", verifyToken, checkRole("Sysadmin"), listUsers);
router.get("/:id",checkRole("Sysadmin") ,showUser);
router.post("/",checkRole("Sysadmin"), addUser);
router.put("/:id",checkRole("Sysadmin"), editUser);
router.delete("/:id",checkRole("Sysadmin"), removeUser);

export default router;
