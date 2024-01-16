const express = require('express');
const { newBooking, getBookingById } = require('../controllers/booking_controller.js');

const bookingsRouter = express.Router();

bookingsRouter.post("/newbooking", newBooking);
bookingsRouter.get("/:id", getBookingById);

module.exports = bookingsRouter;