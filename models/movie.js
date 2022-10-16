const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    plot: {
      type: String,
      required: true,
    },
    cast: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Celebrity",
      },
    ],
  },
  { timestamps: true }
);
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;