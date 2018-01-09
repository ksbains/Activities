var goosestrap = require('goosestrap');
var path = require('path');

var db = goosestrap("mongodb://localhost/Activities", path.resolve("./models/*"));

var Comment = db.model('Comment');
var User = db.model('User');
var Activity = db.model('Activity');

module.exports = db;