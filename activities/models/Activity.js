const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const activitySchema = new Schema({
    location: {type: String, required: true},
    time: {type: String, required: true},
    duration: {type: String, required: true},
    activityType: { type: String, required: true },
    fam: { type: Boolean, required: true },
    maxPeople: { type: Number, required: true },
    description: {type: String, required: true},
    reoccuring: { type: Boolean, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User"},
    usersJoined: [
    { type: Schema.Types.ObjectId, ref: "User"}
    ]
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;