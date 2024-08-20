// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Ensure you have this file for styling

const NavBar = () => (
  <nav>
    <NavLink to="/" exact>Home</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/actors">Actors</NavLink>
  </nav>
);

export default NavBar;
