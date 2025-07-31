const { EventDAO } = require("../dao");

const saveEvent = async (req, res, next) => {
  try {
    const { body } = req;
    let savedEventData = await EventDAO.saveEvent(body);
    res.json({
      success: true,
      message: "Event saved successfully",
      data: savedEventData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message, data: [] });
  }
};

const getEvent = async (req, res, next) => {
  try {
    const { query } = req;
    let eventData = await EventDAO.getEvent(query);
    res.json({
      success: true,
      message: "Event fetched successfully",
      data: eventData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message, data: [] });
  }
};

const updateEvent = async (req, res, next) => {
  try {
    const { params, body } = req;
    let eventData = await EventDAO.updateEvent(params, body);
    res.json({
      success: true,
      message: "Event updated successfully",
      data: eventData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message, data: [] });
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const { params } = req;
    let eventData = await EventDAO.deleteEvent(params);
    res.json({
      success: true,
      message: "Event deleted successfully",
      data: eventData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message, data: [] });
  }
};

module.exports = { saveEvent, getEvent, updateEvent, deleteEvent };
