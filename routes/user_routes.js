const express = require('express');
const {getAllUser, signup, updateUser, deleteUser} = require("../controllers/user_controllers.js");


const userRouter = express.Router();


userRouter.get("/", getAllUser);
userRouter.post("/signup", signup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;