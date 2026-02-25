const express = require("express");
const { EventController } = require("../controller");
const eventRouter = express.Router();

eventRouter.get("/", EventController.getEvent);
eventRouter.post("/", EventController.saveEvent);
eventRouter.put("/:_id", EventController.updateEvent);
eventRouter.delete("/:_id", EventController.deleteEvent);

module.exports = eventRouter;
