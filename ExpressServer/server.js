let express = require("express");
let app = express();

app.use(express.json()); // IMPORTANT for POST & PUT

let boardGames = [
  { id: 1, name: "Chess", players: "2 Players", category: "Strategy", difficulty: "Hard", releaseYear: "6th Century", playTime: "30-60 mins", rating: 4.9, popular: true },
  { id: 2, name: "Ludo", players: "2-4 Players", category: "Family", difficulty: "Easy", releaseYear: "1896", playTime: "20-40 mins", rating: 4.5, popular: true },
  { id: 3, name: "Monopoly", players: "2-6 Players", category: "Business", difficulty: "Medium", releaseYear: "1935", playTime: "60-180 mins", rating: 4.3, popular: true },
  { id: 4, name: "Snakes and Ladders", players: "2-4 Players", category: "Kids", difficulty: "Easy", releaseYear: "Ancient India", playTime: "15-30 mins", rating: 4.2, popular: true },
  { id: 5, name: "Scrabble", players: "2-4 Players", category: "Word", difficulty: "Medium", releaseYear: "1938", playTime: "45-90 mins", rating: 4.6, popular: true },
  { id: 6, name: "Carrom", players: "2-4 Players", category: "Indoor", difficulty: "Medium", releaseYear: "18th Century", playTime: "30-45 mins", rating: 4.4, popular: false }
];


// ✅ GET ALL
app.get("/boardgames", (req, res) => {
  res.send(boardGames);
});



// ✅ GET SINGLE BY ID
app.get("/boardgames/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let game = boardGames.find(g => g.id === id);
  res.send(game);
});


// ✅ POST (ADD NEW GAME)
app.post("/boardgames", (req, res) => {
  let newGame = req.body;
  boardGames.push(newGame);
  res.send("Game Added Successfully");
});


// ✅ PUT (UPDATE GAME)
app.put("/boardgames/:id", (req, res) => {
  let id = parseInt(req.params.id);

  let index = boardGames.findIndex(g => g.id === id);

  if (index !== -1) {
    boardGames[index] = req.body;
    res.send("Game Updated Successfully");
  } else {
    res.send("Game Not Found");
  }
});


// ✅ DELETE GAME
app.delete("/boardgames/:id", (req, res) => {
  let id = parseInt(req.params.id);

  boardGames = boardGames.filter(g => g.id !== id);

  res.send("Game Deleted Successfully");
});


app.listen(3000, () => {
  console.log("Server started at port 3000");
});