import { Router } from "express";
import {
  listUsers,
  showUser,
  addUser,
  editUser,
  removeUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../auth/auth.middleware.js";
import { verifyRole } from "../auth/roles.middleware.js";

const router = Router();

router.get("/", verifyToken, verifyRole( 'superadmin' , 'admin' ), listUsers);
router.get("/:id",verifyRole("superadmin"), showUser);
router.post("/",verifyRole("superadmin"), addUser);
router.put("/:id",verifyRole("superadmin"), editUser);
router.delete("/:id",verifyRole("superadmin"), removeUser);

export default router;
