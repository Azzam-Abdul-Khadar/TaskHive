const express = require("express");
const { UserController } = require("../controller");
const userRouter = express.Router();

userRouter.get("/", UserController.getUser);
userRouter.post("/", UserController.saveUser);
userRouter.put("/:_id", UserController.updateUser);
userRouter.delete("/:_id", UserController.deleteUser);

module.exports = userRouter;
