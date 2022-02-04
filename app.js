const express = require('express');
const indexRouter = require('./routes/index');
const app = express();

app.set('view engine', 'ejs');
app.listen(3000);

app.use('/', indexRouter);

module.exports = app;
