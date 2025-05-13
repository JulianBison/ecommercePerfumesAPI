import { Router } from "express";
import {
  listRoles,
  showRole,
  addRole,
  editRole,
  removeRole,
} from "../controllers/role.controller.js";

const router = Router();

router.get("/", listRoles);
router.get("/:id", showRole);
router.post("/", addRole);
router.put("/:id", editRole);
router.delete("/:id", removeRole);

export default router;
