import React, { useState, useEffect } from "react";
import { createReseña, updateReseña } from "../services/api";

export default function FormularioReseña({ juegoId, reseñaSeleccionada, limpiarSeleccion, actualizar }) {
  const [autor, setAutor] = useState("");
  const [texto, setTexto] = useState("");

  useEffect(() => {
    if (reseñaSeleccionada) {
      setAutor(reseñaSeleccionada.autor);
      setTexto(reseñaSeleccionada.texto);
    }
  }, [reseñaSeleccionada]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ EDITAR reseña existente
    if (reseñaSeleccionada) {
      updateReseña(reseñaSeleccionada._id, {
        autor,
        texto,
      })
        .then(() => {
          alert("Reseña actualizada ✅");
          limpiarSeleccion();
          actualizar();
        })
        .catch(console.error);

      return;
    }

    // ✅ CREAR reseña nueva
    createReseña({
      juegoId,
      autor,
      texto,
    })
      .then(() => {
        alert("Reseña agregada ✅");
        setAutor("");
        setTexto("");
        actualizar();
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{reseñaSeleccionada ? "Editar reseña" : "Agregar reseña"}</h3>

      <input
        type="text"
        placeholder="Nombre"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />

      <textarea
        placeholder="Escribe tu reseña..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      ></textarea>

      <button type="submit">
        {reseñaSeleccionada ? "Guardar cambios" : "Guardar"}
      </button>

      {reseñaSeleccionada && (
        <button type="button" onClick={limpiarSeleccion}>
          Cancelar edición
        </button>
      )}
    </form>
  );
}