import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Movie from "../components/ui/Movie";

function Movies({ movies }) {
  const location = useLocation();

  // Read ?search=fast from the URL
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search") || "";
  const navigate = useNavigate();
  // Filter movies
  const filteredMovies = movies
    .filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 6); // show first 6 results

    let goBack = () => {
    navigate(-1);
  };

  // ...existing code...
return (
  <section id="movies">
    <h2>Search Results for: "{searchTerm}"</h2>

    <div className="movie__img--wrapper">
      {filteredMovies.length > 0
        ? filteredMovies.map((movie) => <Movie key={movie.id} movie={movie} />)
        : null}
    </div>

    {filteredMovies.length === 0 && (
      <div>
        <p>No movies found</p>
        <button onClick={() => navigate(-1)} className="movie__btn">Back</button>
      </div>
    )}
  </section>
);
// ...existing code...
}

export default Movies;