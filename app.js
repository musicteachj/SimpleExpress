console.log('Test');

// Require Dependencies
var express = require("express");
var path = require("path");
var app = express();

//// Routes ////

// Send HTML File
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/bye", function(req, res) {
	res.send("<h1 style='color:red'>Goodbye!</h1>");
});

app.get("/dog", function(req, res) {
	res.send("<h1 style='color:green'>Bark!</h1>");
});

// Route Params Var
app.get("/r/:subredditName", function(req, res) {
	var subreddit = req.params.subredditName;
	res.send("Welcome to the " + subreddit + " SubReddit!");
})

// Route for any other request not labeled above
// Error page
// Must be placed under other routes, order of routes matter
app.get("*", function(req, res) {
	res.send("<h1 style='color:purple'>Other Page!</h1>");
});

app.listen(3000, function() {
	console.log("Serving up on port 3000");
});