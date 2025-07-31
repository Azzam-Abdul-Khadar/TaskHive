const { EventModel } = require("../model");

const saveEvent = async (data) => {
  try {
    return await EventModel.create([data]);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getEvent = async (query) => {
  try {
    return await EventModel.find(query).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateEvent = async (query, data) => {
  try {
    return await EventModel.findOneAndUpdate(query, data, { new: true }).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteEvent = async (query) => {
  try {
    return await EventModel.findOneAndDelete(query).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { saveEvent, getEvent, updateEvent, deleteEvent };
