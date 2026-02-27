import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import GamePage from "./components/GamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/games" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;