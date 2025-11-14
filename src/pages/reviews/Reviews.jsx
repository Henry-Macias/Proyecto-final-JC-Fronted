import { useEffect, useState } from "react";
import { getReviews, deleteReview } from "../../services/reviewService";
import ReviewCard from "../../components/reviewcard/ReviewCard";
import "./Reviews.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const data = await getReviews();
    setReviews(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro quieres eliminar esta reseña?")) {
      try {
        await deleteReview(id);
        setReviews(reviews.filter((r) => r._id !== id));
      } catch (error) {
        console.error("Error al eliminar reseña:", error);
        alert("No se pudo eliminar la reseña");
      }
    }
  };

  return (
    <div>
      <h2>⭐ Reseñas de Videojuegos</h2>
      {reviews.length === 0 ? (
        <p>No hay reseñas registradas aún.</p>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review) => (
            <ReviewCard
              key={review._id}
              review={review}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Reviews;