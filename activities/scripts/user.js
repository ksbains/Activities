const mongoose = require("mongoose");
const db = require("./models");
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/activites",
	{
		useMongoClient: true
	}
);

const userSeed = [
	{
    first: "Mohammed",
    last: "Avdol",
    username: "MagiciansRed",
    email: "mavdol@gmail.com",
    password: "password",
    phoneNumber: "1234567",
    flakeScore: "0.01",
    bio: "test",
    lastLogin: "",
    status: ""}
	},	
	{
    first: "Polnareff",
    last: "Jean",
    username: "SilverChariot",
    email: "pjean@gmail.com",
    password: "password",
    phoneNumber: "1234567",
    flakeScore: "0.2",
    bio: "test",
    lastLogin: "",
    status: ""}
	},
	{
    first: "Kakyoin",
    last: "Noriaki",
    username: "HeirophantGreen",
    email: "knoriaki@gmail.com",
    password: "password",
    phoneNumber: "1234567",
    flakeScore: "0.03",
    bio: "test",
    lastLogin: "",
    status: ""}
	},	
	{
    first: "Joseph",
    last: "Joestar",
    username: "PurpleHermit",
    email: "jjoestar@gmail.com",
    password: "password",
    phoneNumber: "1234567",
    flakeScore: "0.04",
    bio: "test",
    lastLogin: "",
    status: ""}
	},	
	{
    first: "Jotaro",
    last: "Joestar",
    username: "MagiciansRed",
    email: "jutes@gmail.com",
    password: "password",
    phoneNumber: "1234567",
    flakeScore: "0.05",
    bio: "test",
    lastLogin: "",
    status: ""}
	},
	{
    first: "Iggy",
    last: "Dog",
    username: "TheFool",
    email: "iggy@gmail.com",
    password: "password",
    phoneNumber: "1234567",
    flakeScore: "0.06",
    bio: "test",
    lastLogin: "",
    status: ""}
	}
]