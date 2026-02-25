const express = require("express");
const { NoteController } = require("../controller");
const noteRouter = express.Router();

noteRouter.get("/", NoteController.getNote);
noteRouter.post("/", NoteController.saveNote);
noteRouter.put("/:_id", NoteController.updateNote);
noteRouter.delete("/:_id", NoteController.deleteNote);

module.exports = noteRouter;
