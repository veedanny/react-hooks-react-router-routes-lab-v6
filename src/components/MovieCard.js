// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </>
  );
};

export default Home;
