import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieInfo from "./pages/MovieInfo";
import { useEffect, useState } from "react";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=747abfb4&s=fast`
      );
      const data = await response.json();
      setMovies(data.Search);
    }

    fetchMovies();
  }, []);

  return (
    <Router basename="/react-project-fast-and-the-furious">
      <div>
      <Nav />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
    </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
