import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createReview } from "../../services/reviewService";
import "./AddReview.css";

function AddReview() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    juegoId: "",
    puntuacion: 3,
    textoReseña: "",
    horasJugadas: "",
    dificultad: "Normal",
    recomendaria: false,
  });

  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/juegos")
      .then((resp) => resp.json())
      .then((data) => setJuegos(data))
      .catch((err) => console.error("Error cargando juegos", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReview(formData);
      alert("Reseña agregada exitosamente!");
      setFormData({
        juegoId: "",
        puntuacion: 3,
        textoReseña: "",
        horasJugadas: "",
        dificultad: "Normal",
        recomendaria: false,
      });
    } catch (error) {
      console.error("Error al guardar la reseña:", error);
      alert("Error al guardar la reseña");
    }
  };

  return (
    <div>
      <h2>Agregar nueva reseña</h2>

      {/* 🔹 BOTONES DE NAVEGACIÓN */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>

        <button
          onClick={() => navigate("/")}
          className="back-btn"
        >
          ⬅ Volver al Inicio
        </button>

        <Link to="/reviews" className="back-btn">
          ← Volver a Reseñas
        </Link>

      </div>

      <form onSubmit={handleSubmit} className="form">

        <label>Juego:</label>
        <select
          name="juegoId"
          value={formData.juegoId}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un juego</option>
          {juegos.map((j) => (
            <option key={j._id} value={j._id}>
              {j.titulo}
            </option>
          ))}
        </select>

        <label>
          Puntuación (1-5):
          <input
            type="number"
            name="puntuacion"
            min="1"
            max="5"
            value={formData.puntuacion}
            onChange={handleChange}
            required
          />
        </label>

        <textarea
          name="textoReseña"
          placeholder="Escribe tu reseña..."
          value={formData.textoReseña}
          onChange={handleChange}
        />

        <input
          type="number"
          name="horasJugadas"
          placeholder="Horas jugadas"
          value={formData.horasJugadas}
          onChange={handleChange}
        />

        <select
          name="dificultad"
          value={formData.dificultad}
          onChange={handleChange}
        >
          <option value="Fácil">Fácil</option>
          <option value="Normal">Normal</option>
          <option value="Difícil">Difícil</option>
        </select>

        <label>
          <input
            type="checkbox"
            name="recomendaria"
            checked={formData.recomendaria}
            onChange={handleChange}
          />
          ¿Lo recomendarías?
        </label>

        <button type="submit">Guardar reseña</button>
      </form>
    </div>
  );
}

export default AddReview;
