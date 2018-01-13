const mongoose = require("mongoose");
const db = require("./models");
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/activites",
	{
		useMongoClient: true
	}
);

const activitySeed = [
{
	location: "Egypt",
	time: "March 24, 2002",
	duration: "40days",
	activityType: "Plane Crashing",
	fam: true,
	maxPeople: 6,
	description: "We're going to egypt to kill a Vampire",
	reocurring: false
}
]