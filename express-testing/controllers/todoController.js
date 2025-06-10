const todoService = require("../services/todoService.js");
const mongoose = require("mongoose");

const handleAsync = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.error("Error:", error);

    return error instanceof mongoose.Error.ValidationError
      ? res.status(400).json({
        error: { message: error.message, name: error.name },
      })
      : res.status(500).json({
        error: {
          message: error.message || "Internal server error",
          name: error.name || "UnknownError",
        },
      });
  }
}

// Validator definition
const customValidator = (
  predicate,
  statusCode,
  defaultMsg,
  value,
  res,
  customMsg,
) =>
  predicate(value)
    ? (res.status(statusCode).json({ error: customMsg || defaultMsg }), true)
    : false;

const curryByBind = fn =>
  fn.length === 0
    ? fn()
    : p => curryByBind(fn.bind(null, p));

// Curried version
const curriedValidator = curryByBind(customValidator);

// Create reusable validator
const respondIfEmptyOrNotFound = curriedValidator
  // (item => !item || !item.length)
  (item => !(Array.isArray(item) ? item.length : item))
  (404)
  ("No data found");

const validateObjectId = curriedValidator
  (item => !mongoose.Types.ObjectId.isValid(item))
  (400)
  ("Invalid movie ID format")

// getAllTodos
const getAllTodos = handleAsync(async (req, res, next) => {
  const todos = await todoService.getAllTodos();

  // todos is empty or not
  if (respondIfEmptyOrNotFound(todos)(res)("No todos found")) return;

  res.status(200).json({ message: "success", data: todos });
});

// getTodoById 
const getTodoById = handleAsync(async ({ id }, res, next) => {
  // todoId is valid or not
  if (validateObjectId(id)(res)) return;

  const todo = await todoService.getTodoById(id);

  // todo is found or not
  if (respondIfEmptyOrNotFound(todo)(res)(`todoId ${id} is not found`)) return;

  res.status(200).json({ message: "success", data: todo });
});

// saveTodo
const saveTodo = handleAsync(async ({ body }, res, next) => {
  const saved = await todoService.saveTodo(body);

  // saved todo is found or not
  if (respondIfEmptyOrNotFound(saved)(res)("failed to saved todo")) return;

  res.status(201).json({ message: "success", data: saved });
});

// updateTodoById
const updateTodoById = handleAsync(async ({ id, body }, res, next) => {
  // todoId is valid or not
  if (validateObjectId(id)(res)) return;

  const updated = await todoService.updateTodoById(id, body);

  res.status(200).json({ message: "success", data: updated });
});

const deleteTodoById = handleAsync(async ({ id }, res, next) => {
  // todoId is valid or not
  if (validateObjectId(id)(res)) return;

  const deleted = await todoService.deleteTodoById(id);

  // delete todo is found or not
  if (respondIfEmptyOrNotFound(deleted)(res)(`todoId ${id} is not found to delete`)) return;

  res.status(200).json({ message: "success", data: deleted });
});

module.exports = {
  getAllTodos,
  getTodoById,
  saveTodo,
  updateTodoById,
  deleteTodoById,
}
