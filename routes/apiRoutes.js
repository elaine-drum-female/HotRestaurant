// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData = require("../data/tableList");
var waitListData = require("../data/waitingList");

module.exports = function(app) {

    app.get('/api/tables', function(req, res) {
        res.json(tableData);
    });

    app.get('/api/waitlist', function(req, res) {
        res.json(waitListData);
    });
}