import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link, Links, useParams } from 'react-router-dom';
import Ratings from '../components/ui/Ratings';
import Movie from '../components/ui/Movie';

function MovieInfo({ movies }) {
  const {id} = useParams();
  const movie = movies.find(movie => +movie.id === +id );


  return (
    <div id="movies__body">
      <main id="movie__main">
        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top">
              <Link to="/movies" className="movie__link">
              <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/movies" className="movie__link">
              <h2 className="movie__selected--title--top">Movies</h2>
              </Link>
            </div>
            <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img src={movie.url} alt="" className="movie__selected--img" />
              </figure>
              <div className="movie__selected--description">
                <h2 className="movie__selected--title">{movie.title}</h2>
                <h2 className="movie__selected--year">{movie.year}</h2>
                <Ratings  rating={movie.rating} />
                <p className="movie__selected--plot"><strong className="movie__selected--plot--label" >Plot:</strong> {movie.plot}</p>
                <a href={`https://www.imdb.com/title/${movie.imdbId}/ratings/`} target="_blank" rel="noopener noreferrer">View on IMDb</a>
                <div className="movie__selected--rated">Rated: {movie.rated}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top">
              <h2 className="movie__selected--title--top">Favourite Movies</h2>
            </div>
            <div className="movies">
            {
              movies.filter(movie => movie.rating >= 6 && +movie.id !== +id)
              .slice(0, 4)
              .map(movie => <Movie movie={movie} key={movie.id} />)
            }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MovieInfo;
