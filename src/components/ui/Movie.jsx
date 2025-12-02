import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = movie.Poster;
    img.onload = () => setLoaded(true);
    if (img.complete) setLoaded(true);
  }, [movie.Poster]);

  return (
    <div className="movie">
      {loaded ? (
        <>
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} className="movie__img"/>
          </Link>
          <h3 className="movie__selected--title">
            <Link to={`/movie/${movie.imdbID}`}className="movie__selected--title">{movie.Title} </Link>
          </h3>
          <p className="movie__year">{movie.Year}</p>
        </>
      ) : (
        <div className="skeleton">Loading...</div>
      )}
    </div>
  );
}

export default Movie;