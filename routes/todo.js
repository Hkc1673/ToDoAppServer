const express = require("express");

const router = express.Router();

const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
    changeCompleted
} = require("../controllers/todo");

router.get("/", getAllTodo);

router.post("/", postCreateTodo);

router.put("/:id", putUpdateTodo);

router.delete("/:id", deleteTodo);

router.put("/update/:id", changeCompleted);


module.exports = router;
