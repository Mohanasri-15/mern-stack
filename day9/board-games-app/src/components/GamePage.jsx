import React from "react";
import "./GamePage.css";

function GamePage() {
  return (
    <div className="game-page">

      <div className="banner red">
        <div>
          <h1>BOARD GAMES</h1>
          <p>Fun strategy games for everyone.</p>
          <button>READ MORE</button>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" />
      </div>

      <div className="banner blue">
        <div>
          <h1>LET'S PLAY</h1>
          <p>Enjoy with friends and family.</p>
          <button>READ MORE</button>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" />
      </div>

      <div className="banner green">
        <div>
          <h1>CHILDREN'S CLUB</h1>
          <p>Best games for kids.</p>
          <button>READ MORE</button>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/3523/3523063.png" />
      </div>

    </div>
  );
}

export default GamePage;