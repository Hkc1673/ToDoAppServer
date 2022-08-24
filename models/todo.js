const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["to do", "in progress", "done"],
        default: "to do",
    },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
