var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var zentrenRouter = require('./routes/zentren');

var app = express();

// Datenbank


/*

*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/zentren', zentrenRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
/*
app.use('/test', (req, res) => {
  console.log("DAAAAAAAAAAAAAAAAAAA");
  con.query("SELECT * FROM userprofil", function (err, rows, fields) {
    if (err) throw err;
    rows.forEach( (row) => {
      console.log(`${row.vorname} ${row.nachname}`);
    });
  });
  res.send("hsdakdasd");
});

app.post('/test', (req, res) => {
  console.log("DAAAAAAAAAAAAAAAAAAA");
  con.query("SELECT * FROM userprofil", function (err, rows, fields) {
    if (err) throw err;
    rows.forEach( (row) => {
      console.log(`${row.vorname} ${row.nachname}`);
    });
  });
  res.send("hsdakdasd");
});

*/
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
