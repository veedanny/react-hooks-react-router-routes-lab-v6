// src/pages/Actors.js
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('/actors')
      .then(response => response.json())
      .then(data => setActors(data));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
};

export default Actors;
