const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Activity = require("./Activity");

const UserSchema = new Schema({
    first: { type: String, required: true },
    last: { type: String, required: true },
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    phoneNumber: { type: String, required: true},
    flakeScore: { type: String, required: true},
    bio: { type: String, required: true},
    activitiesCreated: [
        {
            type: Schema.Types.ObjectId,
            ref: "Activity"
        }
    ],
    activitiesJoined: [
        {
            type: Schema.Types.ObjectId,
            ref: "Activity"
        }
    ],
    lastLogin: {type: Date},
    // status: {type:ENUM('active', 'inactive')}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
