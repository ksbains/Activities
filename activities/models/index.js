var goosestrap = require('goosestrap');
var path = require('path');
var Activites = require("./Activity");
var Users = require("./User");
//var db = goosestrap("mongodb://localhost/Activities", path.resolve("../models/*"));

var toReturn = {
	User: Users,
	Activity: Activites
};
console.log('toReturn', toReturn);


module.exports = toReturn;
