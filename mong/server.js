const express = require("express");
const connectDB = require("./config/db");
const BoardGame = require("./model/boardgame");

const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

connectDB();

/* ============================
   CREATE BoardGame
============================ */
app.post("/games", async (req, res) => {
  try {
    const game = await BoardGame.create(req.body);
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* ============================
   GET All Games
============================ */
app.get("/games", async (req, res) => {
  const games = await BoardGame.find();
  res.json(games);
});

/* ============================
   GET Single Game
============================ */
app.get("/games/:id", async (req, res) => {
  const game = await BoardGame.findById(req.params.id);
  res.json(game);
});

/* ============================
   UPDATE Game
============================ */
app.put("/games/:id", async (req, res) => {
  const updated = await BoardGame.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

/* ============================
   DELETE Game
============================ */
app.delete("/games/:id", async (req, res) => {
  await BoardGame.findByIdAndDelete(req.params.id);
  res.json({ message: "Game Deleted" });
});

app.listen(3000, () => {
  console.log("🚀 Server Running on Port 3000");
});