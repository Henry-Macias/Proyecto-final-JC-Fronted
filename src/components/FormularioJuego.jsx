import React, { useState, useEffect } from "react";
import { createJuego, updateJuego } from "../services/api";

export default function FormularioJuego({ juegoSeleccionado, limpiarSeleccion }) {
  const [titulo, setTitulo] = useState("");
  const [portada, setPortada] = useState("");
  const [horasJugadas, setHorasJugadas] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [completado, setCompletado] = useState(false);

  // ✅ Cuando el usuario presione “Editar”, cargamos los datos
  useEffect(() => {
    if (juegoSeleccionado) {
      setTitulo(juegoSeleccionado.titulo);
      setPortada(juegoSeleccionado.portada);
      setHorasJugadas(juegoSeleccionado.horasJugadas);
      setPuntuacion(juegoSeleccionado.puntuacion);
      setCompletado(juegoSeleccionado.completado);
    }
  }, [juegoSeleccionado]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Si hay juego seleccionado → actualizar
    if (juegoSeleccionado) {
      updateJuego(juegoSeleccionado._id, {
        titulo,
        portada,
        horasJugadas,
        puntuacion,
        completado,
      })
        .then(() => {
          alert("Juego actualizado ✅");
          limpiarSeleccion();
        })
        .catch(console.error);

      return;
    }

    // ✅ Caso contrario → crear nuevo
    createJuego({
      titulo,
      portada,
      horasJugadas,
      puntuacion,
      completado,
    })
      .then(() => alert("Juego agregado ✅"))
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{juegoSeleccionado ? "Editar juego" : "Agregar juego"}</h2>

      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        type="text"
        placeholder="URL de portada"
        value={portada}
        onChange={(e) => setPortada(e.target.value)}
      />

      <input
        type="number"
        placeholder="Horas jugadas"
        value={horasJugadas}
        onChange={(e) => setHorasJugadas(e.target.value)}
      />

      <input
        type="number"
        placeholder="Puntuación (0 a 5)"
        value={puntuacion}
        onChange={(e) => setPuntuacion(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={completado}
          onChange={() => setCompletado(!completado)}
        />
        ¿Completado?
      </label>

      <button type="submit">
        {juegoSeleccionado ? "Guardar cambios" : "Agregar juego"}
      </button>

      {juegoSeleccionado && (
        <button type="button" onClick={limpiarSeleccion}>
          Cancelar edición
        </button>
      )}
    </form>
  );
}