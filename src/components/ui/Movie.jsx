import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Ratings from './Ratings';

const Movie = ({ movie }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = movie.url;

    const handleLoad = () => setLoaded(true);
    image.onload = handleLoad;

    // If already cached, force trigger load event manually
    if (image.complete) handleLoad();

    return () => {
      image.onload = null; // cleanup
    };
  }, [movie.url]);

  return (
    <div className="movie">
      {loaded ? (
        <>
          <Link to={`/movie/${movie.id}`}>
            <figure className="movie__img--wrapper">
              <img src={movie.url} alt={movie.title} className="movie__img movie__img--visible" />
            </figure>
          </Link>
          <div className="movie__title">
            <Link to={`/movie/${movie.id}`} className="movie__title--link">
              {movie.title}
            </Link>
          </div>
          <div className="movie__year">{movie.year}</div>
          <Ratings rating={movie.rating} />
          <a href={`https://www.imdb.com/title/${movie.imdbId}/ratings/`} target="_blank" rel="noopener noreferrer">View on IMDb</a>
          <div className="movie__selected--rated">{movie.rated}</div>
        </>
      ) : (
        <>
          <div className="movie__img--skeleton"></div>
          <div className="skeleton movie__title--skeleton"></div>
          <div className="skeleton rating--skeleton"></div>
          <div className="skeleton price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Movie;