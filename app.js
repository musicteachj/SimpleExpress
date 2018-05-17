console.log('Test');

var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("<h1 style='color:blue'>Hi there!</h1>");
});

app.get("/bye", function(req, res) {
	res.send("<h1 style='color:red'>Goodbye!</h1>");
});

app.get("/dog", function(req, res) {
	res.send("<h1 style='color:green'>Bark!</h1>");
});

app.listen(3000, function() {
	console.log("Serving up on port 3000");
});