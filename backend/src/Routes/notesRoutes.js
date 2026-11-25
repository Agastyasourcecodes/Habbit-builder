import express from "express";
import {
  createAllNotes,
  DeleteAllNotes,
  getAllNotes,
  UpdateAllNotes,
  getNoteById,
} from "../controllers/notesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createAllNotes);
router.put("/:id", UpdateAllNotes);
router.delete("/:id", DeleteAllNotes);

export default router;