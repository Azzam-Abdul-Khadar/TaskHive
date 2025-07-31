const { LeadDAO } = require("../dao");

const saveLead = async (req, res, next) => {
  try {
    const { body } = req;
    let savedLeadData = await LeadDAO.saveLead(body);
    res.json({
      success: true,
      message: "Lead saved successfully",
      data: savedLeadData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message, data: [] });
  }
};

const getLead = async (req, res, next) => {
  try {
    const { query } = req;
    let leadData = await LeadDAO.getLead(query);
    res.json({
      success: true,
      message: "Lead fetched successfully",
      data: leadData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message, data: [] });
  }
};

const updateLead = async (req, res, next) => {
  try {
    const { params, body } = req;
    let leadData = await LeadDAO.updateLead(params, body);
    res.json({
      success: true,
      message: "Lead updated successfully",
      data: leadData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message, data: [] });
  }
};

const deleteLead = async (req, res, next) => {
  try {
    const { params } = req;
    let leadData = await LeadDAO.deleteLead(params);
    res.json({
      success: true,
      message: "Lead deleted successfully",
      data: leadData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message, data: [] });
  }
};

module.exports = { saveLead, getLead, updateLead, deleteLead };
