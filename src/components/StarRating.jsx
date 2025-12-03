function StarRating({ rating }) {
  // rating = IMDb rating (0–10)
  const starsOutOfFive = (rating / 10) * 5;
  const fullStars = Math.floor(starsOutOfFive);
  const halfStar = starsOutOfFive - fullStars >= 0.5;

  return (
    <div className="stars">
      {"★".repeat(fullStars)}
      {halfStar && "☆"}
      {"☆".repeat(5 - fullStars - (halfStar ? 1 : 0))}
    </div>
  );
}

export default StarRating;