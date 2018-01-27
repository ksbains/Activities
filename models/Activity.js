const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const activitySchema = new Schema({
    address: {type: String, required: true},
    time: {type: String, required: true},
    lat: {type: String, required: false},
    long: {type: String, required: false},
    duration: {type: String, required: true},
    activityType: { type: String, required: true },
    fam: { type: Boolean, required: true },
    maxPeople: { type: Number, required: true },
    description: {type: String, required: true},
    creator: { type: Schema.Types.ObjectId, ref: User},
    date: { type: String},
    usersJoined: [
    { type: Schema.Types.ObjectId, ref: User}
    ]
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;