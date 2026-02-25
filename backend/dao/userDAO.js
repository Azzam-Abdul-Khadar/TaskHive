const { UserModel } = require("../model");

const saveUser = async (data) => {
  try {
    return await UserModel.create([data]);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUser = async (query) => {
  try {
    console.log(query);
    return await UserModel.find(query).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUser = async (query, data) => {
  try {
    return await UserModel.findOneAndUpdate(query, data, { new: true }).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteUser = async (query) => {
  try {
    return await UserModel.findOneAndDelete(query).exec();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { saveUser, getUser, updateUser, deleteUser };
