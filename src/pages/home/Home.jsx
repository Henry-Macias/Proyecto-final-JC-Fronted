import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-container">

        {/* HEADER */}
        <header className="header-box">
          <h1 className="title-neon">GameTracker</h1>
        </header>

        {/* HERO */}
        <section className="hero-section">
          <div className="hero-text">
            <p>
              Lleva el control de tu biblioteca gamer, comparte reseñas, califica
              tus juegos favoritos y descubre nuevas aventuras.
            </p>

            <button className="btn-neon" onClick={() => navigate("/games")}>
              Explorar Juegos
            </button>
          </div>

          <div className="hero-image"></div>
        </section>

        {/* ADD GAME */}
        <section className="hero-section">
          <div className="hero-text">
            <p>
              Agrega tu juego favorito a GameTracker y comparte tu experiencia con la comunidad.
            </p>


            <button
              className="btn-neon-secondary"
              onClick={() => navigate("/games/add")}
            >
              + Agregar Juego
            </button>
          </div>
          <div className="hero-image"></div>
        </section>

        {/* FEATURES */}
        <section className="features">
          <h2 className="subtitle-neon">¿Qué puedes hacer con GameTracker?</h2>

          <div className="features-grid">

            <div className="feature-card" onClick={() => navigate("/games")}>
              <img src="https://static.vecteezy.com/system/resources/previews/002/392/616/non_2x/games-or-gamepad-icon-vector.jpg" alt="icon" />
              <h3>Organiza tus juegos</h3>
              <p>Guarda tus títulos, plataformas y logros de forma ordenada.</p>
            </div>

            <div className="feature-card" onClick={() => navigate("/reviews/add")}>
              <img src="https://cdn-icons-png.flaticon.com/512/6715/6715998.png" alt="icon" />
              <h3>Escribe reseñas</h3>
              <p>Comparte tus opiniones y calificaciones.</p>
            </div>

            <div className="feature-card" onClick={() => navigate("/reviews")}>
              <img src="https://www.pngfind.com/pngs/m/25-259913_gaming-game-icons-png-transparent-png.png" alt="icon" />
              <h3>Descubre nuevos títulos</h3>
              <p>Explora recomendaciones según tus gustos.</p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;