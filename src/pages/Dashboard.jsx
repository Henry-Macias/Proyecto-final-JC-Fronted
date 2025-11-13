import { useState } from "react";
import Menu from "../components/Menu.jsx";
import BibliotecaJuegos from "./BibliotecaJuegos.jsx";
import ReseñasJuego from "./ReseñasJuego.jsx";
import "./dashboard.css";

export default function Dashboard() {
  const [tab, setTab] = useState("biblioteca");
  const [menuVisible, setMenuVisible] = useState(false);

  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

  return (
    <div className="dashboard-container">

      {/* Botón para abrir menú */}
      <button className="menu-toggle" onClick={() => setMenuVisible(true)}>
        ☰ Menú
      </button>

      {/* Menú DESPLEGABLE */}
      {menuVisible && (
        <Menu
          onClose={() => setMenuVisible(false)}
          onSelectTab={(newTab) => {
            setTab(newTab);
            setMenuVisible(false);
          }}
        />
      )}

      <div className="content-area">
        {tab === "biblioteca" && (
          <BibliotecaJuegos onSelect={(j) => {
            setJuegoSeleccionado(j);
            setTab("reseñas");
          }} />
        )}

        {tab === "reseñas" && (
          <ReseñasJuego juego={juegoSeleccionado} />
        )}

        {tab === "stats" && <div style={{ color: "white" }}>Pronto: estadísticas 🔥</div>}
      </div>
    </div>
  );
}
