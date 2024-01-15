const express = require('express');
const {getAllUser, signup} = require("../controllers/user_controllers.js");


const userRouter = express.Router();


userRouter.get("/", getAllUser);
userRouter.get("/signup", signup);

module.exports = userRouter;