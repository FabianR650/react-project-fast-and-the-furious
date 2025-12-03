import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Movie from "../components/ui/Movie";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState("title");
  const location = useLocation();
  const navigate = useNavigate();

  const queryTerm = new URLSearchParams(location.search).get("query") || "";

  // Fetch search results AND full movie details
  useEffect(() => {
    async function fetchMovies() {
      const search = queryTerm || "fast";

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=747abfb4&s=${search}`
      );
      const data = await res.json();

      if (!data.Search) {
        setMovies([]);
        return;
      }

      // Fetch full details for each movie
      const detailedMovies = await Promise.all(
        data.Search.slice(0, 6).map(async (m) => {
          const detailRes = await fetch(
            `https://www.omdbapi.com/?apikey=747abfb4&i=${m.imdbID}`
          );
          const details = await detailRes.json();
          return { ...m, ...details };
        })
      );

      setMovies(detailedMovies);
    }

    fetchMovies();
  }, [queryTerm]);

  // Sorting logic
  const sortedMovies = [...movies].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.Title.localeCompare(b.Title);
      case "year":
        return Number(b.Year) - Number(a.Year);
      case "rating":
        return (Number(b.imdbRating) || 0) - (Number(a.imdbRating) || 0);
      case "genre":
        return (a.Genre || "").localeCompare(b.Genre || "");
      default:
        return 0;
    }
  });

  return (
    <section id="movies">
      <button onClick={() => navigate(-1)} className="film__border"></button>
      <h2>Search Results for "{queryTerm}"</h2>

      {/* SORT FORM */}
      <form className="sort-form">
        <label>Sort by:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="title">Title (A–Z)</option>
          <option value="year">Year (Newest First)</option>
          <option value="rating">IMDb Rating (High → Low)</option>
          <option value="genre">Genre (A–Z)</option>
        </select>
      </form>

      <div className="movie__img--wrapper">
        {sortedMovies.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}
      </div>

      {sortedMovies.length === 0 && (
        <div>
          <p className="movie__no-results">No movies found</p>
          <button onClick={() => navigate(-1)} className="movie__btn">
            Back
          </button>
        </div>
      )}
    </section>
  );
}

export default Movies;