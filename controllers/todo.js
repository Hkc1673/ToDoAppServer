const Todo = require("../models/todo");

exports.getAllTodo = (req, res) => {
    Todo.find()
        .then((todo) => {
            console.log({ todo });
            res.json(todo);
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "no todo found", error: err.message })
        );
};

exports.postCreateTodo = (req, res) => {
    Todo.create(req.body)
        .then((data) => {
            console.log({ data });
            res.json({ message: "todo added successfully", data });
        })
        .catch((err) =>
            res.status(400).json({
                message: "unable to add new todo",
                error: err.message,
            })
        );
};

exports.putUpdateTodo = (req, res) => {
    console.log("id: ", req.params.id);
    console.log("body: ", req.body);
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((todo) => {
            console.log("edit", { todo });
            return res.json({ message: "updated successfully", todo });
        })
        .catch((err) =>
            res
                .status(400)
                .json({ error: "unable to update todo", message: err.message })
        );
};

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then((todo) => {
            console.log("delete", { todo });
            return res.json({ message: "deleted successfully", todo });
        })
        .catch((err) =>
            res
                .status(400)
                .json({ error: "unable to delete todo", message: err.message })
        );
};

exports.changeCompleted = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((todo) => {
            console.log("changed status", { todo });
            return res.json({ message: "updated successfully", todo });
        }).catch((err) =>
            res
                .status(400)
                .json({ error: "unable to update todo", message: err.message })
        );
};


