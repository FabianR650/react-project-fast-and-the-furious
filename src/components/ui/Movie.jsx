import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function StarRating({ rating }) {
  if (!rating || rating === "N/A") return null;

  const starsOutOfFive = (Number(rating) / 10) * 5;
  const full = Math.floor(starsOutOfFive);
  const half = starsOutOfFive - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="stars">
      {"★".repeat(full)}
      {half && "☆"}
      {"☆".repeat(empty)}
    </div>
  );
}

function Movie({ movie }) {
  const [loaded, setLoaded] = useState(false);
  const [details, setDetails] = useState(null);

  // Load image
  useEffect(() => {
    const img = new Image();
    img.src = movie.Poster;
    img.onload = () => setLoaded(true);
    if (img.complete) setLoaded(true);
  }, [movie.Poster]);

  // Fetch full movie details (needed for rating)
  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(
        `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=747abfb4`
      );
      const data = await res.json();
      setDetails(data);
    }
    fetchDetails();
  }, [movie.imdbID]);

  return (
    <div className="movie">
      {loaded ? (
        <>
          <Link to={`/movie/${movie.imdbID}`}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="movie__img"
            />
          </Link>

          <h3 className="movie__selected--title">
            <Link
              to={`/movie/${movie.imdbID}`}
              className="movie__selected--title"
            >
              {movie.Title}
            </Link>
          </h3>

          <p className="movie__year">{movie.Year}</p>

          {details && (
            <>
              <StarRating rating={details.imdbRating} />
              <p className="movie__genre">{details.Genre}</p>
            </>
          )}
        </>
      ) : (
        <div className="skeleton">Loading...</div>
      )}
    </div>
  );
}

export default Movie;