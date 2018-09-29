var require = require("path");

// routing // 
module.exports = function(app) {

    app.get("/tables", function(app) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

    app.get("/reserve", function(app) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));

});
};
////

