const mongoose = require("mongoose");

const boardGameSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  players: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  releaseYear: {
    type: String,
    required: true
  },
  playTime: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  popular: {
    type: Boolean,
    default: false
  }
});

const BoardGame = mongoose.model("BoardGame", boardGameSchema);

module.exports = BoardGame;