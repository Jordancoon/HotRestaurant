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

// arrays
var guests = [
    {
        name: "Yoda",
        phoneNumber: "123-456-7890",
        email: "yoda@jeditemple.com",
        uniqueID: "littlejedi"
      },
      {
        name: "Vadar",
        phoneNumber: "123-456-7890",
        email: "vadar@deathstar.com",
        uniqueID: "sithlord"
      }
];
var currentReservations = [];
var waitingList = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    });

    app.get("/addReservation", function(req, res) {
    res.sendFile(path.join(__dirname, "addReservation.html"));
    });

    app.get("/viewTables", function(req, res) {
    res.sendFile(path.join(__dirname, "viewTables.html"));
    });

// Displays all characters
app.get("/api/guests", function(req, res) {
    return res.json(guests);
  });

  for (var i = 0; i < guests.length; i++) {
    if (guests.length < 5) {
      guests.push(waitingList[0]);
    } 
  }