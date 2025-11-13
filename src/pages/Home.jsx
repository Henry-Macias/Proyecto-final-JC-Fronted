import { useState } from "react";
import Dashboard from "./Dashboard.jsx";
import "./home.css";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div className="home-container">
      {!started ? (
        <div className="home-content">
          <h1 className="logo">GameTracker</h1>

          <button
            className="btn-primary"
            onClick={() => setStarted(true)}
          >
            Entrar
          </button>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}