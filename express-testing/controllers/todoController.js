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
const isEmptyOrNotFound = data =>
  data == null || (Array.isArray(data) && data.length === 0);
const validateEmptyOrNotFound = curriedValidator
  (isEmptyOrNotFound)
  (404)
  ("No data found");

const isInvalidObjectId = id => !mongoose.Types.ObjectId.isValid(id);
const validateObjectId = curriedValidator
  (isInvalidObjectId)
  (400)
  ("Invalid todo ID format")

// getAllTodos
const getAllTodos = handleAsync(async (req, res, next) => {
  const todos = await todoService.getAllTodos();

  // todos is empty or not
  if (validateEmptyOrNotFound(todos)(res)("No todos found")) return;

  res.status(200).json({ message: "success", data: todos });
});

// getTodoById 
const getTodoById = handleAsync(async (req, res, next) => {
  const { todoId } = req.params;

  // todoId is valid or not
  if (validateObjectId(todoId)(res)) return;

  const todo = await todoService.getTodoById(todoId);

  // todo is found or not
  if (validateEmptyOrNotFound(todo)(res)(`todoId ${todoId} is not found`)) return;

  res.status(200).json({ message: "success", data: todo });
});

// saveTodo
const saveTodo = handleAsync(async (req, res, next) => {
  const { todo } = req.body;

  const saved = await todoService.saveTodo(todo);

  // saved todo is found or not
  if (validateEmptyOrNotFound(saved)(res)("failed to save todo")) return;

  res.status(201).json({ message: "success", data: saved });
});

// updateTodoById
const updateTodoById = handleAsync(async (req, res, next) => {
  const { todoId } = req.params;
  // todoId is valid or not
  if (validateObjectId(todoId)(res)) return;

  const { todo } = req.body;

  const updated = await todoService.updateTodoById(todoId, todo);

  if (validateEmptyOrNotFound(updated)(res)("No todo found for update")) return;

  res.status(200).json({ message: "success", data: updated });
});

const deleteTodoById = handleAsync(async (req, res, next) => {
  const { todoId } = req.params;
  // todoId is valid or not
  if (validateObjectId(todoId)(res)) return;

  const deleted = await todoService.deleteTodoById(todoId);

  // delete todo is found or not
  if (validateEmptyOrNotFound(deleted)(res)(`todoId ${todoId} is not found to delete`)) return;

  res.status(200).json({ message: "success", data: deleted });
});

module.exports = {
  getAllTodos,
  getTodoById,
  saveTodo,
  updateTodoById,
  deleteTodoById,
}
