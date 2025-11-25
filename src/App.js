// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { movies } from './data';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import Home from './pages/Home'; 
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />        
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/movie/:id" element={<MovieInfo movies={movies} />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
