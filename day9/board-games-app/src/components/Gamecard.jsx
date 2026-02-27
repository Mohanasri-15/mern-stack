function GameCard({ game }) {
  return (
    <div className="card">
      <img src={game.image} alt={game.name} />
      <h3>{game.name}</h3>
      <p>{game.players}</p>
      <span>{game.type}</span>
    </div>
  );
}

export default GameCard;