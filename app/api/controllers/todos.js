const todoModel = require("../models/todos");
module.exports = {
  getById: function (req, res, next) {
    todoModel.findById(req.params.todoId, function (err, todoInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "Todo found!!!",
          data: { todo: todoInfo },
        });
      }
    });
  },
  getAll: function (req, res, next) {
    let todoList = [];
    todoModel.find({}, function (err, todos) {
      if (err) {
        next(err);
      } else {
        for (let todo of todos) {
          todoList.push({
            id: todo._id,
            name: todo.name,
            description: todo.description,
            status: todo.status,
          });
        }
        res.json({
          status: "success",
          message: "Todo list found!!!",
          data: { todos: todoList },
        });
      }
    });
  },
  updateById: function (req, res, next) {
    todoModel.findByIdAndUpdate(
      req.params.todoId,
      {
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
      },
      function (err, todoInfo) {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "Todo updated successfully!!!",
            data: null,
          });
        }
      }
    );
  },
  deleteById: function (req, res, next) {
    todoModel.findByIdAndRemove(req.params.todoId, function (err, todoInfo) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "Todo deleted successfully!!!",
          data: null,
        });
      }
    });
  },
  create: function (req, res, next) {
    todoModel.create(
      { name: req.body.name, description: req.body.description, status: false },
      function (err, result) {
        if (err) next(err);
        else
          res.json({
            status: "success",
            message: "Todo added successfully!!!",
            data: null,
          });
      }
    );
  },
};
