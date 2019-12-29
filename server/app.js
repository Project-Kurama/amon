var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var csurf = require('csurf')
var helmet = require('helmet');
var mongoose = require('mongoose');


var indexRouter = require('./routes/index.routes');
var moviesRouter = require('./routes/movies.routes');

var app = express();


app.use(helmet());
var csrfProtection = csurf({
        cookie: true
    })
    //db connection
var mongoconnStr = "mongodb://127.0.0.1:27017/amon" || process.env.MONGOCONNSTR;

var conn = mongoose.connect(
    mongoconnStr, {
        autoIndex: true,
        authSource: "admin" || process.env.MONGOADMINDB,
        auth: {
            user: "mongoadmin" || process.env.MONGOUSER,
            password: "secret" || process.env.MONGOUPASS
        },
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (!(null === err)) console.log("DB error", err);
    }
);

mongoose.connection.on("error", function(err) {
    console.error("MongoDB connection error: " + err);
    process.exit(-1);
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/dist')));

app.use('/', indexRouter);
app.use('/movies', moviesRouter);



module.exports = app;