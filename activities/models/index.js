var goosestrap = require('goosestrap');
var path = require('path');

var db = goosestrap("mongodb://localhost/Activities", path.resolve("../models/*"));

module.exports = db;