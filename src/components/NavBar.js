import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'pink',
    textDecoration: 'none',
    color: 'magenta',
  }


  return (
    <div className="navbar">
      <NavLink 
        to="/"
        exact
        style={link}
        activeStyle={{
          textShadow: 'magenta' 
        }}>Home</NavLink>
      <NavLink 
        to="/movies"
        exact
        style={link}
        activeStyle={{
          textShadow: 'magenta' 
        }}>Movies</NavLink>
      <NavLink  
        to="/directors"
        exact
        style={link}
        activeStyle={{
          textShadow: 'magenta' 
        }}>Directors</NavLink>
      <NavLink  
        to="/actors"
        exact
        style={link}
        activeStyle={{
          textShadow: 'magenta' 
        }}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
