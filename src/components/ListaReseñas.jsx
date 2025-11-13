import React, { useEffect, useState } from "react";
import { getReseñas, deleteReseña } from "../services/api";

export default function ListaReseñas({ juegoId, onEdit }) {
  const [reseñas, setReseñas] = useState([]);

  const cargar = () => {
    getReseñas()
      .then((res) => {
        const filtradas = res.data.filter((r) => r.juegoId === juegoId);
        setReseñas(filtradas);
      })
      .catch(console.error);
  };

  useEffect(() => {
    cargar();
  }, [juegoId]);

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar esta reseña?")) {
      deleteReseña(id)
        .then(() => cargar())
        .catch(console.error);
    }
  };

  return (
    <div>
      <h3>Reseñas</h3>

      {reseñas.length === 0 ? (
        <p>No hay reseñas aún.</p>
      ) : (
        <ul>
          {reseñas.map((r) => (
            <li key={r._id}>
              <b>{r.autor}:</b> {r.texto}

              <button onClick={() => onEdit(r)}>
                Editar
              </button>

              {/* ✅ ELIMINAR reseña */}
              <button onClick={() => handleDelete(r._id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}