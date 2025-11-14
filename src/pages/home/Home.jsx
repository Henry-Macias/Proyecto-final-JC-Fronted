import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-container">

        {/* 🔥 HEADER CON MARCO NEÓN (DEFINIDO EN TU CSS) */}
        <div className="header-box">
          <h1>GameTracker</h1>
        </div>

        <section className="hero-section">
          <div className="hero-text">
            <p>
              Lleva el control de tu biblioteca gamer, comparte reseñas, califica
              tus juegos favoritos y descubre nuevas aventuras.
            </p>

            <button className="cta-button" onClick={() => navigate("/games")}>
              Explorar Juegos
            </button>
          </div>
          <section className="add-section">
            <div className="add-actions">

              <button
                className="btn-add-game"
                onClick={() => navigate("/games/add")}
              >
                + Agregar Juego
              </button>
            </div>
          </section>

          <div className="hero-image">
          </div>
        </section>

        <section className="features">
          <h2>¿Qué puedes hacer con GameTracker?</h2>

          <div className="features-grid">
            <div
              className="feature-card"
              onClick={() => navigate("/games")}
              style={{ cursor: "pointer" }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
              <h3>Organiza tus juegos</h3>
              <p>Guarda tus títulos, plataformas y logros de forma ordenada.</p>
            </div>

            <div
              className="feature-card"
              onClick={() => navigate("/reviews/add")}
              style={{ cursor: "pointer" }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/4470/4470316.png" alt="" />
              <h3>Escribe reseñas</h3>
              <p>Comparte tus opiniones y calificaciones.</p>
            </div>

            <div
              className="feature-card"
              onClick={() => navigate("/reviews")}
              style={{ cursor: "pointer" }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/992/992700.png" alt="" />
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