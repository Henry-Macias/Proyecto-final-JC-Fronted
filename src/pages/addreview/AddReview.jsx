import { useState, useEffect } from "react";
import { createReview } from "../../services/reviewService";
import "./AddReview.css";

function AddReview() {
  const [formData, setFormData] = useState({
    juegoId: "",
    puntuacion: 3,
    textoReseña: "",
    horasJugadas: "",
    dificultad: "Normal",
    recomendaria: false,
  });

  const [juegos, setJuegos] = useState([]);

  // 🔹 Cargar lista de juegos del backend
  useEffect(() => {
    fetch("http://localhost:5000/api/juegos")
      .then((resp) => resp.json())
      .then((data) => setJuegos(data))
      .catch((err) => console.error("Error cargando juegos", err));
  }, []);

  // 🔹 Manejo del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🔹 Enviar reseña
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReview(formData);
      alert("Reseña agregada exitosamente!");

      // Resetear formulario
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

      <form onSubmit={handleSubmit} className="form">

        {/* 🔹 Seleccionar juego */}
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

        {/* Puntuación */}
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

        {/* Reseña */}
        <textarea
          name="textoReseña"
          placeholder="Escribe tu reseña..."
          value={formData.textoReseña}
          onChange={handleChange}
        />

        {/* Horas jugadas */}
        <input
          type="number"
          name="horasJugadas"
          placeholder="Horas jugadas"
          value={formData.horasJugadas}
          onChange={handleChange}
        />

        {/* Dificultad */}
        <select
          name="dificultad"
          value={formData.dificultad}
          onChange={handleChange}
        >
          <option value="Fácil">Fácil</option>
          <option value="Normal">Normal</option>
          <option value="Difícil">Difícil</option>
        </select>

        {/* Checkbox recomendación */}
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