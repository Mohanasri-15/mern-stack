import games from "../data/games";
import GameCard from "./GameCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>🎲 Board Games Collection</h1>

      <div className="grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;