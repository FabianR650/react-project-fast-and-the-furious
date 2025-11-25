import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FastLaneLanding from "../components/FastLaneLanding";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    if (!search.trim()) return;

    // navigate to /movies with search query
    navigate(`/movies?search=${encodeURIComponent(search)}`);
  }

  return (
    <section id="home">
      <h3 className="welcome-title">Welcome to Fast Lane Cars</h3>

      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <button type="submit" className="search-bar__btn">Submit</button>
      </form>
      <FastLaneLanding />
    </section>
  );
}

export default Home;