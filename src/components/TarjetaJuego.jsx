import React from "react";

export default function TarjetaJuego({ juego, onEdit, onDelete }) {
  return (
    <div className="card">
      <img src={juego.portada} alt={juego.titulo} />
      <h3>{juego.titulo}</h3>
      <p>Horas jugadas: {juego.horasJugadas}</p>
      <p>⭐ {juego.puntuacion}/5</p>

      <button onClick={() => onEdit(juego)}>Editar</button>
      <button onClick={() => onDelete(juego._id)}>Eliminar</button>

      <Link to={`/reseñas/${juego._id}`}>
        <button>Ver reseñas</button>
      </Link>
    </div>
  );
}