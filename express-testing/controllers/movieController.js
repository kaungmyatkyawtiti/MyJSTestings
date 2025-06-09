const mongoose = require("mongoose");
const movieService = require("../services/MovieService.js");

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
const customValidator = (conditionFn, statusCode, defaultMessage) =>
  (value, res, customMessage) =>
    conditionFn(value)
      ? (res.status(statusCode).json({ error: customMessage || defaultMessage }), true)
      : false;

const validateObjectId = customValidator(
  id => !mongoose.Types.ObjectId.isValid(id),
  400,
  "Invalid movie ID format"
);

const respondIfEmpty = customValidator(
  items => !items?.length,
  404,
  "No data found"
);

const respondIfNotFound = customValidator(
  item => !item,
  404,
  "Resource not found"
);

// --- Controller Logic ---
const getAllMovies = handleAsync(async (req, res) => {
  const movies = await movieService.getAllMovies();

  if (respondIfEmpty(movies, res, "No movies found")) return;

  res.status(200).json({ message: "success", data: movies });
});

const getMovieById = handleAsync(async ({ params: { id } }, res) => {
  if (validateObjectId(id, res)) return;

  const movie = await movieService.getMovieById(id);

  if (respondIfNotFound(movie, res, `Movie ID ${id} not found`)) return;

  res.status(200).json({ message: "success", data: movie });
});

const searchMovieByTitle = handleAsync(async ({ params: { title } }, res) => {
  const results = await movieService.searchMovieByTitle(title);

  if (respondIfEmpty(results, res, "No movies found with that title")) return;

  res.status(200).json({ message: "success", data: results });
});

const searchMovieByYear = handleAsync(async ({ params: { year } }, res) => {
  if (!/^\d{4}$/.test(year))
    return res.status(400).json({ error: "Invalid year format" });

  const results = await movieService.searchMovieByYear(year);

  if (respondIfEmpty(results, res, "No movies found from that year")) return;

  res.status(200).json({ message: "success", data: results });
});

const saveMovie = handleAsync(async ({ body }, res) => {
  const saved = await movieService.saveMovie(body);

  if (respondIfNotFound(saved, res, "No movies found to save")) return;

  res.status(201).json({ message: "success", data: saved });
});

const updateMovieById = handleAsync(async ({ params: { id }, body }, res) => {
  if (validateObjectId(id, res)) return;

  const updated = await movieService.updateMovieById(id, body);

  if (respondIfNotFound(updated, res, "Movie not found for update")) return;

  res.status(200).json({ message: "success", data: updated });
});

const deleteMovieById = handleAsync(async ({ params: { id } }, res) => {
  if (validateObjectId(id, res)) return;

  const deleted = await movieService.deleteMovieById(id);

  if (respondIfNotFound(deleted, res, "Movie not found for deletion")) return;

  res.status(200).json({ message: "success", data: deleted });
});

///const getAllMovies = handleAsync(async (req, res) =>
///  respondIfEmpty(await movieService.getAllMovies(), res, "No movies found")
///    ? null
///    : res.status(200).json({
///      message: "success",
///      data: await movieService.getAllMovies(),
///    })
///);
///
///const getMovieById = handleAsync(async ({ params: { id } }, res) =>
///  validateObjectId(id, res)
///    ? null
///    : (await movieService.getMovieById(id)).pipe(movie =>
///      respondIfNotFound(movie, res, `Movie ID ${id} not found`)
///        ? null
///        : res.status(200).json({ message: "success", data: movie })
///    )
///);
///
///const searchMovieByTitle = handleAsync(async ({ params: { title } }, res) =>
///  respondIfEmpty(await movieService.searchMovieByTitle(title), res, "No movies found with that title")
///    ? null
///    : res.status(200).json({
///      message: "success",
///      data: await movieService.searchMovieByTitle(title),
///    })
///);
///
///const searchMovieByYear = handleAsync(async ({ params: { year } }, res) =>
///  /^\d{4}$/.test(year)
///    ? respondIfEmpty(await movieService.searchMovieByYear(year), res, "No movies found from that year")
///      ? null
///      : res.status(200).json({
///        message: "success",
///        data: await movieService.searchMovieByYear(year),
///      })
///    : res.status(400).json({ error: "Invalid year format" })
///);
///
///const saveMovie = handleAsync(async ({ body }, res) =>
///  res.status(201).json({
///    message: "success",
///    data: await movieService.saveMovie(body),
///  })
///);
///
///const updateMovieById = handleAsync(async ({ params: { id }, body }, res) =>
///  validateObjectId(id, res)
///    ? null
///    : (await movieService.updateMovieById(id, body)).pipe(updated =>
///      respondIfNotFound(updated, res, "Movie not found for update")
///        ? null
///        : res.status(200).json({ message: "success", data: updated })
///    )
///);
///
///const deleteMovieById = handleAsync(async ({ params: { id } }, res) =>
///  validateObjectId(id, res)
///    ? null
///    : (await movieService.deleteMovieById(id)).pipe(deleted =>
///      respondIfNotFound(deleted, res, "Movie not found for deletion")
///        ? null
///        : res.status(200).json({ message: "success", data: deleted })
///    )
///);

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
