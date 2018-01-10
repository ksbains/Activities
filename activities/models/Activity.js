const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
<<<<<<< HEAD
    location: { type: String, required: true },
    time: { type: String, required: true },
    duration: { type: String, required: true },
    activityType: { type: String, required: true },
    fam: { type: Boolean, required: true },
    maxPeople: { type: Number, required: true },
    description: { type: String, required: true },
=======
    location: {type: String, required: true},
    time: {type: String, required: true},
    duration: {type: String, required: true},
    activityType: { type: String, required: true },
    fam: { type: Boolean, required: true },
    maxPeople: { type: Number, required: true },
    description: {type: String, required: true},
>>>>>>> a9249f40ec3dc5c87208dadc04c9e79a71857846
    reoccuring: { type: Boolean, required: true }
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;