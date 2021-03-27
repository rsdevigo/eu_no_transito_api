require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var AuthTokenStrategy = require('passport-auth-token').Strategy;

var indexRouter = require('./routes/index');
var scoresRouter = require('./routes/scores');
var scoreRouter = require('./routes/score');

passport.use(
  'authtoken',
  new AuthTokenStrategy(
    { headerFields: ['authorization'] },
    function (token, done) {
      console.log('AQUI');
      if (token == process.env.SERVER_KEY) {
        return done(null, true);
      } else {
        return done(null, false, { message: 'Incorrect password.' });
      }
    }
  )
);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use('/', indexRouter);
app.use('/scores', scoresRouter);
app.use('/score', scoreRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
