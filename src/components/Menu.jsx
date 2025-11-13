import "./menu.css";

export default function Menu({ onClose, onSelectTab }) {
  return (
    <div className="menu-container">
      <div className="menu-card">
        <h2>Menú</h2>

        {/* ✅ Cambian la vista dentro del Dashboard */}
        <button
          className="menu-btn"
          onClick={() => onSelectTab("biblioteca")}
        >
          📘 Mi Biblioteca
        </button>

        <button
          className="menu-btn"
          onClick={() => onSelectTab("stats")}
        >
          📊 Estadísticas
        </button>

        <button
          className="menu-btn"
          onClick={() => onSelectTab("reseñas")}
        >
          ⭐ Reseñas
        </button>

        <button className="btn-close" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}