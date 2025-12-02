import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FastLaneLanding from "../components/FastLaneLanding"

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/movies?query=${query}`);
  };

  return (
    <section id="home">
      <h1 className="welcome-title">Welcome to Fast Lane Movies</h1>
      <div className="search__results">
      <form onSubmit={handleSubmit}>
        <input className="search-bar"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-bar__btn" type="submit">Search</button>
      </form>
      </div>
      <FastLaneLanding />
    </section>
  );
}

export default Home;