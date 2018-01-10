const mongoose = require("mongoose");
const db = require("./models");
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/activites",
	{
		useMongoClient: true
	}
);

const commentSeed = [
{
	author: "Dio Brando",
	message: "How many loaves of bread have you eaten in your life?",
	timeStamp: "10:10"
}
]