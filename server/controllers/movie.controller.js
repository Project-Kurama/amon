var Movie = require('../models/movie.model').Movie;

exports.saveMovie = function(req, res) {
    var movie = new Movie(req.body);
    console.log(req.body);
    movie.save().then((result) => {
        console.log("saved", result);
        res.json(result);
    });
}

exports.getMovies = function(req, res) {
    res.json(Movie.find());
}