var require = require("path");

// routing // 
module.exports = function(app) {

    app.get("/tables", function(app) {
        res.sendFile(path.join(__dirname, "../public/viewTables.html"));
    });

    app.get("/reserve", function(app) {
        res.sendFile(path.join(__dirname, "../public/addReservation.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addReservation.html"));

});
};
////

