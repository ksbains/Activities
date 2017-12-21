const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first: { type: String, required: true },
    last: { type: String, required: true },
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    lastLogin: {type: Date},
    status: {type:ENUM('active', 'inacive')}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
