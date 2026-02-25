const express = require("express");
const { LeadController } = require("../controller");
const leadRouter = express.Router();

leadRouter.get("/", LeadController.getLead);
leadRouter.post("/", LeadController.saveLead);
leadRouter.put("/:_id", LeadController.updateLead);
leadRouter.delete("/:_id", LeadController.deleteLead);

module.exports = leadRouter;
