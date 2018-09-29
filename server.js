var express = require("express");
var bodyParser = require("body-parser");


// Express config //
// tell node creating express server//
var app = express();

// set intial port //
var PORT = process.env.PORT || 8080;

//sets up express app to handle data parsing //
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// router //
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener //
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
