const { NoteDAO } = require("../dao");

const saveNote = async (req, res, next) => {
  try {
    const { body } = req;
    let savedNoteData = await NoteDAO.saveNote(body);
    res.json({
      success: true,
      message: "Note saved successfully",
      data: savedNoteData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message, data: [] });
  }
};

const getNote = async (req, res, next) => {
  try {
    const { query } = req;
    let noteData = await NoteDAO.getNote(query);
    res.json({
      success: true,
      message: "Note fetched successfully",
      data: noteData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message, data: [] });
  }
};

const updateNote = async (req, res, next) => {
  try {
    const { params, body } = req;
    let noteData = await NoteDAO.updateNote(params, body);
    res.json({
      success: true,
      message: "Note updated successfully",
      data: noteData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message, data: [] });
  }
};

const deleteNote = async (req, res, next) => {
  try {
    const { params } = req;
    let noteData = await NoteDAO.deleteNote(params);
    res.json({
      success: true,
      message: "Note deleted successfully",
      data: noteData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error?.message, data: [] });
  }
};

module.exports = { saveNote, getNote, updateNote, deleteNote };
