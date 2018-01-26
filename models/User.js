const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Activity = require("./Activity");
var passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    first: { type: String, required: true },
    last: { type: String, required: true },
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    phoneNumber: { type: String, required: true},
    flakeScore: { type: String},
    bio: { type: String},
    pic: { type: String},
    activitiesCreated: [
        {
            type: Schema.Types.ObjectId,
            ref: Activity
        }
    ],
    activitiesJoined: [
        {
            type: Schema.Types.ObjectId,
            ref: Activity
        }
    ],
    lastLogin: {type: Date}
    // lastLogin: {type: Date},
    // status: {type:ENUM('active', 'inactive')}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
