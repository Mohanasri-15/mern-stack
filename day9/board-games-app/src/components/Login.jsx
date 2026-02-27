import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();   // 🔥 important

  const handleLogin = () => {
    navigate("/games");   // go to GamePage
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h2 className="welcome">WELCOME</h2>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <div className="remember">
          <input type="checkbox" /> Remember me
        </div>

        <div className="buttons">
          <button className="signup">SIGN UP</button>
          <button className="login" onClick={handleLogin}>
            LOGIN
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;