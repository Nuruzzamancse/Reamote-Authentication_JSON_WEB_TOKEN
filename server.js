var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var session = require('express-session');

var config = require('./config');

var router = require('./app/routes');

var port = process.env.PORT || 3000;

mongoose.connect('localhost:27017/test');

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open',function () {

});


app.set('superSecret',config.database.mySecret);


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.use(logger('dev'));
app.use('/api',router);

app.listen(port);

console.log('Server running on port: '+port);