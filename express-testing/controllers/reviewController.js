const reviewService = require("../services/reviewService.js");
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

// --- Validators ---
const customValidator =
  (predicate, status, message) =>
    (value, res, customMessage) =>
      predicate(value)
        ? (res.status(status).json({ error: customMessage || message }), true)
        : false;

// const isInvalidObjectId = id => !mongoose.Types.ObjectId.isValid(id);
const validateObjectId = customValidator(
  id => !mongoose.Types.ObjectId.isValid(id),
  400,
  "Invalid movie ID format"
);

// const isEmpty = data => !(Array.isArray(data) ? data.length : data);
const validateEmptyOrNotFound = customValidator(
  data => data == null || (Array.isArray(data) && data.length === 0),
  404,
  "No data found"
);

const getAllReviews = handleAsync(async (req, res, next) => {
  const reviews = await reviewService.getAllReviews();

  if (validateEmptyOrNotFound(reviews)(res)("No reviews fonnd")) return;

  res.status(200).json({ message: "success", data: reviews });
});

const getReviewById = handleAsync(async (req, res, next) => {
  const { id: reviewId } = req.params;

  if (validateObjectId(reviewId, res)) return;

  const review = await reviewService.getReviewById(reviewId);

  if (validateEmptyOrNotFound(review, res, `reviewId ${reviewId} is not found`)) return;

  res.status(200).json({ message: "success", data: review });
});

const getReviewByMovieId = handleAsync(async (req, res, next) => {
  const { id: movieId } = req.params;

  if (validateObjectId(movieId, res)) return;

  const review = await reviewService.getReviewByMovieId(movieId);

  if (validateEmptyOrNotFound(review, res, `movieId ${movieId} is not found`)) return;

  res.status(200).json({ message: "success", data: review });
});

const saveReview = handleAsync(async (req, res, nextx) => {
  const review = req.body;

  const newReview = await reviewService.saveReview(review);

  res.status(200).json({ message: "success", data: newReview });
});

const updateReviewById = handleAsync(async (req, res, next) => {
  const { id: reviewId } = req.params;

  if (validateObjectId(reviewId, res)) return;

  const review = req.body;

  const updated = await reviewService.updateReviewById(reviewId, review);

  if (validateEmptyOrNotFound(updated, res, "No review found to update"));

  res.status(200).json({ message: "success", data: updated });
});

const deleteReviewById = handleAsync(async (req, res, next) => {
  const { id: reviewId } = req.params;

  if (validateObjectId(reviewId, res)) return;

  const deleted = await reviewService.deleteReviewById(reviewId);

  if (validateEmptyOrNotFound(deleted, res, `reviewId ${reviewId} not found to dlelete`)) return;

  re.status(200).json({ message: "success", data: deleted });
});

module.exports = {
  getAllReviews,
  getReviewById,
  getReviewByMovieId,
  saveReview,
  updateReviewById,
  deleteReviewById,
}
