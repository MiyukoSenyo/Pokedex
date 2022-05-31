import React from 'react';
import { NavLink } from 'react-router-dom';

const PokemonCard = (props) => {
  return (
    <NavLink className='card' to={{ pathname: `/pokemon/${props.id}` }}>
      <h3 className='card__title'>{props.name.french}</h3>
    </NavLink>
  );
};

export default PokemonCard;


