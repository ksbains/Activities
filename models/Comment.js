const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: { type: String, required: true },
    message: { type: String, required: true },
    timeStamp: { type: String, required: true}
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
