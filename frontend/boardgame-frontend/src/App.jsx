import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:3000/games";

function App() {
  const [games, setGames] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    players: "",
    category: "",
    difficulty: "",
    releaseYear: "",
    playTime: "",
    rating: "",
    popular: false,
  });

  const [editingId, setEditingId] = useState(null);

  // GET ALL GAMES
  const fetchGames = async () => {
    const res = await axios.get(API);
    setGames(res.data);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // ADD / UPDATE GAME
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await axios.put(`${API}/${editingId}`, form);
      setEditingId(null);
    } else {
      await axios.post(API, form);
    }

    fetchGames();

    setForm({
      id: "",
      name: "",
      players: "",
      category: "",
      difficulty: "",
      releaseYear: "",
      playTime: "",
      rating: "",
      popular: false,
    });
  };

  // DELETE GAME
  const deleteGame = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchGames();
  };

  // EDIT GAME
  const editGame = (game) => {
    setForm(game);
    setEditingId(game._id);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>🎲 Board Games Manager</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input name="id" placeholder="Game ID" value={form.id} onChange={handleChange} />
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="players" placeholder="Players" value={form.players} onChange={handleChange} />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <input name="difficulty" placeholder="Difficulty" value={form.difficulty} onChange={handleChange} />
        <input name="releaseYear" placeholder="Release Year" value={form.releaseYear} onChange={handleChange} />
        <input name="playTime" placeholder="Play Time" value={form.playTime} onChange={handleChange} />
        <input name="rating" placeholder="Rating" value={form.rating} onChange={handleChange} />

        <label>
          Popular:
          <input
            type="checkbox"
            name="popular"
            checked={form.popular}
            onChange={handleChange}
          />
        </label>

        <button type="submit">
          {editingId ? "Update Game" : "Add Game"}
        </button>
      </form>

      <hr />

      {/* GAME LIST */}
      <h2>All Games</h2>
      {games.map((game) => (
        <div key={game._id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <h3>{game.name}</h3>
          <p>Players: {game.players}</p>
          <p>Category: {game.category}</p>
          <p>Difficulty: {game.difficulty}</p>
          <p>Rating: {game.rating}</p>

          <button onClick={() => editGame(game)}>Edit</button>
          <button onClick={() => deleteGame(game._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;