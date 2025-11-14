import "./ReviewCard.css";

function ReviewCard({ review, onDelete }) {
  return (
    <div className="review-card">
      <h3>Juego: {review.juegoId.titulo}</h3>
      <p>⭐ {review.puntuacion} / 5</p>
      <p>
        <strong>Dificultad:</strong> {review.dificultad}
      </p>
      <p>
        <strong>Horas jugadas:</strong> {review.horasJugadas}
      </p>
      <p>{review.textoReseña}</p>
      <small>
        {review.recomendaria ? "✅ Lo recomendaría" : "❌ No lo recomendaría"}
      </small>

      <button onClick={() => onDelete(review._id)} className="delete-btn">
        Eliminar
      </button>
    </div>
  );
}

export default ReviewCard;