import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameCard from "../../components/gamecard/GameCard";

function Games() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/api/juegos";

  useEffect(() => {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((data) => setGames(data));
  }, []);

  const eliminarJuego = async (id) => {
    const confirmDelete = confirm("¿Seguro que quieres eliminar este juego?");
    if (!confirmDelete) return;

    try {
      const resp = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!resp.ok) {
        throw new Error("Error eliminando el juego");
      }

      setGames((prev) => prev.filter((juegos) => juegos._id !== id));
    } catch (error) {
      console.error(error);
      alert("Hubo un error eliminando el juego");
    }
  };

  return (
    <div>
      {/* 🔙 BOTÓN PARA VOLVER */}
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "0.6rem 1.2rem",
          backgroundColor: "#00d4ff",
          border: "none",
          color: "#000",
          fontWeight: "bold",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "1rem"
        }}
      >
        ⬅ Volver al inicio
      </button>

      <h2>🎮 Lista de Videojuegos</h2>

      {games.length === 0 ? (
        <p>No hay juegos registrados aún.</p>
      ) : (
        <div className="games-grid">
          {games.map((juegos) => (
            <GameCard
              key={juegos._id}
              juegos={juegos}
              onDelete={eliminarJuego}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Games;