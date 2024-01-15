const express = require('express');
const {getAllUser, signup, updateUser} = require("../controllers/user_controllers.js");


const userRouter = express.Router();


userRouter.get("/", getAllUser);
userRouter.get("/signup", signup);
userRouter.get("/:id", updateUser);

module.exports = userRouter;