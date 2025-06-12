const mongoose = require("mongoose");
const movieService = require("../services/movieService.js");

// --- Async Handler Wrapper ---
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
};

// --- Validators ---
const customValidator = (
  predicate,
  statusCode,
  defaultMessage,
  value,
  res,
  customMessage
) =>
  predicate(value)
    ? (res.status(statusCode).json({ error: customMessage || defaultMessage }), true)
    : false;

const curryByBind = fn =>
  fn.length === 0
    ? fn()
    : p => curryByBind(fn.bind(null, p));

const curriedValidator = curryByBind(customValidator);

const isInvalidObjectId = id => !mongoose.Types.ObjectId.isValid(id);
const validateObjectId = curriedValidator
  (isInvalidObjectId)
  (400)
  ("Invalid movie ID format");

const isEmptyOrNotFound = data =>
  data == null || (Array.isArray(data) && data.length === 0);
const validateEmptyOrNotFound = curriedValidator
  (isEmptyOrNotFound)
  (404)
  ("No data found");

// --- Controller Logic ---
const getAllMovies = handleAsync(async (req, res) => {
  const movies = await movieService.getAllMovies();

  if (validateEmptyOrNotFound(movies)(res)("No movies found")) return;

  res.status(200).json({ message: "success", data: movies });
});

const getMovieById = handleAsync(async (req, res) => {
  const { movieId } = req.params;

  if (validateObjectId(movieId)(res)) return;

  const movie = await movieService.getMovieById(movieId);

  if (validateEmptyOrNotFound(movie)(res)(`Movie ID ${movieId} not found`)) return;

  res.status(200).json({ message: "success", data: movie });
});

const searchMovieByTitle = handleAsync(async (req, res) => {
  const { movieTitle } = req.params;

  const results = await movieService.searchMovieByTitle(movieTitle);

  if (validateEmptyOrNotFound(results)(res)("No movies found with that title")) return;

  res.status(200).json({ message: "success", data: results });
});

const searchMovieByYear = handleAsync(async (req, res) => {
  const { movieYear } = req.params;

  if (!/^\d{4}$/.test(movieYear))
    return res.status(400).json({ error: "Invalid year format" });

  const results = await movieService.searchMovieByYear(movieYear);

  if (validateEmptyOrNotFound(results)(res)("No movies found from that year")) return;

  res.status(200).json({ message: "success", data: results });
});

const saveMovie = handleAsync(async (req, res) => {
  const { movie } = req.body;

  const saved = await movieService.saveMovie(movie);

  if (validateEmptyOrNotFound(saved)(res)("failed to save movie")) return;

  res.status(201).json({ message: "success", data: saved });
});

const updateMovieById = handleAsync(async (req, res) => {
  const { movieId } = req.params;

  if (validateObjectId(movieId)(res)) return;

  const { movie } = req.body;

  const updated = await movieService.updateMovieById(movieId, movie);

  if (validateEmptyOrNotFound(updated)(res)("Movie not found for update")) return;

  res.status(200).json({ message: "success", data: updated });
});

const deleteMovieById = handleAsync(async (req, res) => {
  const { movieId } = req.params;

  if (validateObjectId(movieId)(res)) return;

  const deleted = await movieService.deleteMovieById(movieId);

  if (validateEmptyOrNotFound(deleted)(res)("Movie not found for deletion")) return;

  res.status(200).json({ message: "success", data: deleted });
});

// --- Export ---
module.exports = {
  getAllMovies,
  getMovieById,
  searchMovieByTitle,
  searchMovieByYear,
  saveMovie,
  updateMovieById,
  deleteMovieById,
};
