import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Movie from "../components/ui/Movie";

function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Make sure this matches Home.jsx
  const queryTerm = new URLSearchParams(location.search).get("query") || "";

  useEffect(() => {
    async function fetchMovies() {
    const search = queryTerm || "fast"; // default search

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=747abfb4&s=${search}`
    );
    const data = await res.json();
    setMovies(data.Search || []);
  }

  fetchMovies();
}, [queryTerm]);

  const filteredMovies = movies.slice(0, 6);

  return (
    <section id="movies">
      <h2>Search Results for "{queryTerm}"</h2>

      <div className="movie__img--wrapper">
        {filteredMovies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            <Movie movie={movie} />
          </Link>
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <div>
          <p className="movie__no-results" >No movies found</p>
          <button onClick={() => navigate(-1)} className="movie__btn">Back</button>
        </div>
      )}
    </section>
  );
}

export default Movies;