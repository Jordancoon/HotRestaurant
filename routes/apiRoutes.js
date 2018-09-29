// load data //
var tableData = require("../data/tableData");
var waitListData = require("../data/waitingList")
///

module.exports = function(app) {

    app.get("/api/tables", function(req, res) {
        res.json(tableData);
    });

    app.get("/api/waitList", function(req, res) {
        res.json(waitlistData);
    });

    app.post("/api/tables", function(req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }
        else {
            waitListData.push(req.body);
            res.json(false);
        }
    });

    /// clear out table //
    app.post("/api/clear", function() {
        tableData = [];
        waitListData = [];

        console.log(tableData);
    });
};
