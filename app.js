const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user_routes.js');

dotenv.config();

const app = express();
app.use("/user",userRouter);
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.cdpscq1.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000, () =>
            console.log("Connected to database and server is running ")
        )
    })
    .catch(err => console.log(err))
