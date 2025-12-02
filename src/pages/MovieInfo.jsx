import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Movie from "../components/ui/Movie";

function MovieInfo() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=747abfb4&i=${id}&plot=full`
        );
        const data = await res.json();

        if (data.Response === "False") {
          setError(data.Error);
          setLoading(false);
          return;
        }

        setMovieDetails(data);

        // Recommended movies by first word of title
        if (data.Title) {
          const recRes = await fetch(
            `https://www.omdbapi.com/?apikey=747abfb4&s=${encodeURIComponent(
              data.Title.split(" ")[0]
            )}`
          );
          const recData = await recRes.json();
          setRecommended(
            (recData.Search || []).filter((m) => m.imdbID !== id).slice(0, 4)
          );
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch movie data.");
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  if (loading) return <h2>Loading movie details...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div id="movies__body">
      <main id="movie__main">
        <div className="movies__container">
          <Link to="/">← Back to search</Link>

          <div className="movie__selected">
           <img src={movieDetails.Poster} alt={movieDetails.Title} className="movie__selected--img" />
            <div className="movie__selected--description">
              <h2 className="movie__title--link">{movieDetails.Title}</h2>
              <h3 className="movie__year">{movieDetails.Year}</h3>
              <p className="movie__selected--plot">
                <strong>Plot:</strong> {movieDetails.Plot}
              </p>
              <div className="movie__ratings">Rated: {movieDetails.Rated}</div>
              <div className="movie__imdb-rating">IMDB Rating: {movieDetails.imdbRating}</div>
              <div className="movie__genre">Genre: {movieDetails.Genre}</div>
              <div className="movie__runtime">Runtime: {movieDetails.Runtime}</div>
              <a
                href={`https://www.imdb.com/title/${id}/`}
                target="_blank"
                rel="noreferrer"
              >
                View on IMDb
              </a>
            </div>
          </div>
        </div>

        {recommended.length > 0 && (
          <div className="movies__container">
            <div className="row">
              <div className="movie__selected--top" >
            <h2 className="movie__selected--title--top">Recommended Movies</h2>
            </div>
            <div className="movie">
              {recommended.map((m) => (
                <Link to={`/movie/${m.imdbID}`} key={m.imdbID}>
                  <Movie movie={m} />
                </Link>
              ))}
            </div>
          </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default MovieInfo;
