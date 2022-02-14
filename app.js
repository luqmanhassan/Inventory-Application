require('dotenv').config();
const express = require('express');
const indexRouter = require('./routes/index');
const itemRouter = require('./routes/itemRoutes');
const categoryRouter = require('./routes/categoryRoutes');

const path = require('path');
const mongoose = require('mongoose');
const app = express();

//Set up default mongoose connection
const mongoDB = process.env.SECRET_KEY;

mongoose
  .connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log('Connected To DB');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/item', itemRouter);
app.use('/category', categoryRouter);

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
  res.send('error');
});

module.exports = app;
