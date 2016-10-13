// dependencies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser')
var app = express();
var port = 8080;

// set view engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

//user
app.use(bodyParser.urlencoded());

// routes
var router = require('./app/routes');
app.use('/', router);

//static files
app.use(express.static(__dirname + 'public'));

app.listen(port, function(){
	console.log('Express Started')
})

