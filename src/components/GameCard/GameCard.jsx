import "./GameCard.css";

function GameCard({ juegos, onDelete }) {
  return (
    <div className="game-card">
      <div
        className="game-cover-bg"
        style={{
          backgroundImage: `url(${juegos.imagenPortada ||
            "https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            })`,
        }}
        role="img"
        aria-label={juegos.titulo}
      />

      <div className="game-details">
        <h3>{juegos.titulo}</h3>
        <p className="genre">{juegos.genero}</p>

        <p>
          <strong>Plataforma:</strong> {juegos.plataforma}
        </p>
        <p>
          <strong>Año:</strong> {juegos.añoLanzamiento}
        </p>
        <p>
          <strong>Desarrollador:</strong> {juegos.desarrollador}
        </p>

        <p className="description">{juegos.descripcion}</p>

        <div className="status">
          {juegos.completado ? (
            <span className="badge completed">✅ Completado</span>
          ) : (
            <span className="badge pending">🎯 Pendiente</span>
          )}
        </div>

        {/* 🔥 Botón eliminar */}
        <button
          className="btn-delete"
          onClick={() => onDelete(juegos._id)}
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
}

export default GameCard;