const { LeadModel } = require("../model");

const saveLead = async (data) => {
  try {
    return await LeadModel.create([data]);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getLead = async (query) => {
  try {
    return await LeadModel.find(query).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateLead = async (query, data) => {
  try {
    return await LeadModel.findOneAndUpdate(query, data, { new: true }).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteLead = async (query) => {
  try {
    return await LeadModel.findOneAndDelete(query).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { saveLead, getLead, updateLead, deleteLead };
