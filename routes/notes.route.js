const {Router} = require("express");
const { notesController } = require("../controllers/notes.controller");

const router = Router();

router.post("/notes", notesController.postNote);
router.patch("/notes/:id", notesController.patchNote);
router.delete("/notes/:id", notesController.deleteNote);
router.get("/notes", notesController.getNote);
router.get("/notes/:id/noteByStudent", notesController.getNoteByStudent);

module.exports = router;