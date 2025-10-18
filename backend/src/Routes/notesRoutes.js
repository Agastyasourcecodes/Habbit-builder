import express from "express"
import { createAllNotes, DeleteAllNotes, getAllNotes, UpdateAllNotes,getNoteById } from "../controllers/notesController.js";
const router=express.Router();

router.get("/",getAllNotes);
router.get("/:id",getNoteById);

router.post("/",createAllNotes);
router.put("/:id",UpdateAllNotes);
router.delete("/:id",DeleteAllNotes);

export default router;
