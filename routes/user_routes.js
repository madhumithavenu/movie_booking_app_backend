const express = require('express');
const {getAllUser} = require("../controllers/user_controllers.js");


const userRouter = express.Router();


userRouter.get("/", getAllUser);

module.exports = userRouter;