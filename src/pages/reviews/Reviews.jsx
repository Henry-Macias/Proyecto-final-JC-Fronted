import { useEffect, useState } from "react";
import { getReviews, deleteReview } from "../../services/reviewService";
import ReviewCard from "../../components/reviewcard/ReviewCard";
import { Link } from "react-router-dom";
import "./Reviews.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getReviews();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  const handleDeleteReview = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar esta reseña?");

    if (!confirmar) return;

    try {
      await deleteReview(id);
      setReviews((prev) => prev.filter((r) => r._id !== id));
    } catch (error) {
      console.error("Error eliminando la reseña:", error);
    }
  };

  return (
    <div>
      <h2>⭐ Reseñas de Videojuegos</h2>

      <div className="reviews-buttons">
        <Link to="/" className="back-home-btn">← Volver a Home</Link>
        <Link to="/reviews/add" className="add-review-btn">✏️ Agregar Reseña</Link>
      </div>

      {reviews.length === 0 ? (
        <p>No hay reseñas registradas aún.</p>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review) => (
            <ReviewCard
              key={review._id}
              review={review}
              onDelete={handleDeleteReview}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Reviews;