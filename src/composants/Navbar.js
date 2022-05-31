import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <NavLink className='nav__link' to='/index'>
        Liste de Pokémon
      </NavLink>
      <NavLink className='nav__link' to='/create'>
        Création
      </NavLink>
    </nav>
  );
};

export default Navbar;