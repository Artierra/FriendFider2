// 2. Your`server.js`file should require the basic npm packages we
// 've used in class:`express` and`path`.

// Dependencies
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var app = express();


// Set our port to 8080
var PORT = process.env.PORT || 8080

app.use(bodyParser.json());
//is it false or is it true- what does this mean?
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
//app.use(express.json())
app.use(express.static("app/public"));

require("./app/routing/apiRoute.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App lstening on PORT: " + PORT)
});