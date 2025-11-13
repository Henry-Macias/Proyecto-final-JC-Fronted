import React, { useState } from "react";
import ListaReseñas from "../components/ListaReseñas";
import FormularioReseña from "../components/FormularioReseña";

export default function ReseñasJuego({ juego }) {
  const [reseñaSeleccionada, setReseñaSeleccionada] = useState(null);

  const limpiarSeleccion = () => setReseñaSeleccionada(null);

  if (!juego) {
    return (
      <div style={{ color: "white", padding: "20px" }}>
        <h2>Selecciona un juego para ver sus reseñas</h2>
      </div>
    );
  }

  return (
    <div style={{ color: "white" }}>
      <h1>Reseñas de: {juego.titulo}</h1>

      <FormularioReseña
        juegoId={juego._id}
        reseñaSeleccionada={reseñaSeleccionada}
        limpiarSeleccion={limpiarSeleccion}
      />

      <ListaReseñas
        juegoId={juego._id}
        onEdit={(r) => setReseñaSeleccionada(r)}
      />
    </div>
  );
}