var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/Users/users');
var commentsRouter = require('./routes/Comments/comments');
var genresRouter = require('./routes/Genres/genres');
var showsRouter = require('./routes/Shows/shows');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);
app.use('/genres', genresRouter);
app.use('/shows', showsRouter);


module.exports = app;
