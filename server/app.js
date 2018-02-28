// import files and packages up here
var data = require('./data.json');

var express = require ('express')


// create your express server below
var app = express();

// add your routes and middleware below
app.get('/', function(req,res) {
    res.send('hello world')
})
app.get('/data', function(req,res) {
    res.send(data)
})

// finally export the express application
module.exports = app;
