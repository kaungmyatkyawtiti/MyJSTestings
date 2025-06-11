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

const customValidator = (
  predicate,
  statusCode,
  defaultMsg,
  val,
  res,
  customMsg,
) =>
  predicate(val)
    ? (res.status(statusCode).json({ error: customMsg || defaultMsg }), true)
    : false

const curryByBind = fn =>
  fn.length === 0
    ? fn()
    : p => curryByBind(fn.bind(null, p));

const curriedValidator = curryByBind(customValidator);

const isInvalidObjectId = id => !mongoose.Types.ObjectId.isValid(id);
const validateObjectId = curriedValidator
  (isInvalidObjectId)
  (400)
  ("Invalid review Id format");

const isEmpty = data => !(Array.isArray(data) ? data.length : data);
const validateEmptyOrNotFound = curriedValidator
  (isEmpty)
  (404)
  ("No data found")

const getAllReviews = handleAsync(async (req, res, next) => {
  const reviews = await reviewService.getAllReviews();

  if (validateEmptyOrNotFound(reviews)(res)("No reviews fonnd")) return;

  res.status(200).json({ message: "success", data: reviews });
});

const getReviewById = handleAsync(async (req, res, next) => {
  const { reviewId } = req.params;

  if (validateObjectId(reviewId)(res)) return;

  const review = await reviewService.getReviewById(reviewId);

  if (validateEmptyOrNotFound(review)(res)(`reviewId ${reviewId} is not found`)) return;

  res.status(200).json({ message: "success", data: review });
});

const getReviewByMovieId = handleAsync(async (req, res, next) => {
  const { movieId } = req.params;

  if (validateObjectId(movieId)(res)) return;

  const review = await reviewService.getReviewByMovieId(movieId);

  if (validateEmptyOrNotFound(review)(res)(`movieId ${movieId} is not found`)) return;

  res.status(200).json({ message: "success", data: review });
})
