const { NoteModel } = require("../model");

const saveNote = async (data) => {
  try {
    return await NoteModel.create([data]);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getNote = async (query) => {
  try {
    return await NoteModel.find(query).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateNote = async (query, data) => {
  try {
    return await NoteModel.findOneAndUpdate(query, data, { new: true }).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteNote = async (query) => {
  try {
    return await NoteModel.findOneAndDelete(query).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { saveNote, getNote, updateNote, deleteNote };
