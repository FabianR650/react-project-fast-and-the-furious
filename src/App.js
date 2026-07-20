import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieInfo from "./pages/MovieInfo";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

function App() {
  return (
    <Router>
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
