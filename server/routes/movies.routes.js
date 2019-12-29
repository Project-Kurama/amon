var express = require('express');
var router = express.Router();

var movieController = require('../controllers/movie.controller');

/* Save movie */
router.post('/', movieController.saveMovie);
router.get('/', movieController.getMovies);

module.exports = router;