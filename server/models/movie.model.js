'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Movie Schema
 */
var MovieSchema = new Schema({
    id: {
        type: Schema.Types.Number,
        default: Math.floor(Math.random() * 10)
    },
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    director: {
        type: String,
        trim: true,
    },
    studio: {
        type: String,
        trim: true,
    },
    releaseYear: {
        type: Number,
        default: 0,
        trim: true
    },

});

exports.Movie = mongoose.model('Movie', MovieSchema);