import React, { useEffect, useState } from "react";
import { getJuegos, deleteJuego } from "../services/api.js";
import TarjetaJuego from "../components/TarjetaJuego.jsx";
import FormularioJuego from "../components/FormularioJuego.jsx";

export default function BibliotecaJuegos() {
  const [juegos, setJuegos] = useState([]);
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

  const cargarJuegos = () => {
    getJuegos()
      .then((res) => setJuegos(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    cargarJuegos();
  }, []);

  const limpiarSeleccion = () => {
    setJuegoSeleccionado(null);
    cargarJuegos();
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este juego?")) {
      deleteJuego(id)
        .then(() => cargarJuegos())
        .catch(console.error);
    }
  };

  return (
    <div>
      <h1>Mi Biblioteca de Juegos</h1>

      <FormularioJuego
        juegoSeleccionado={juegoSeleccionado}
        limpiarSeleccion={limpiarSeleccion}
      />

      <h2>Juegos registrados</h2>

      <div className="grid">
        {juegos.map((juego) => (
          <TarjetaJuego
            key={juego._id}
            juego={juego}
            onEdit={(j) => setJuegoSeleccionado(j)}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}