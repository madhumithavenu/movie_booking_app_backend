const express = require('express');
const { addMovie, getAllMovies } = require('../controllers/movie_controller');

const movieRouter = express.Router();

movieRouter.post("/", addMovie);
movieRouter.get("/", getAllMovies);

module.exports = movieRouter;