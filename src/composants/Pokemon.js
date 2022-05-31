import { NavLink } from 'react-router-dom';
import { getPokemon } from '../services/pokemon';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const Pokemon = () => {
  const location = useLocation();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon(location.pathname.slice(8)).then((data) => {
      setPokemon(data);
    });
  }, [location.pathname]);

  function DeletePokemon(id) {
    fetch(`http://localhost:3000/pokemons/${id}`, {method: 'DELETE'})
  }

  if (pokemon.length != 0) {
    return (
      <div>  
          <h2>{pokemon.name.french}</h2>
          <div>
            <span>N° : {pokemon.id}</span>
          </div>
        <br/>
        <div>
          <span>PV : {pokemon.base.HP}</span>
          <span>Attaque : {pokemon.base.Attack}</span>
          <span>Défense : {pokemon.base.Defense}</span>
          <span>Attaque Spéciale : {pokemon['base']['Sp. Attack']}</span>
          <span>Défense Spéciale : {pokemon['base']['Sp. Defense']}</span>
          <span>Vitesse : {pokemon.base.Speed}</span>
        </div>
        <br/>
        <div>
          <h1>Type(s) : </h1>
          <ul>
            {pokemon.type.map((type, index) => {
              return (
                <li key={index}>
                  {type}
                </li>
              );
            })}
          </ul>
        </div>
        <br/>
        <nav>
          <NavLink to='/'>
            <img src={`/img/delete.png`} width="50px" onClick={() => DeletePokemon(pokemon.id)}/>
          </NavLink>
        </nav>
      </div>
    );
  }
};

export default Pokemon;
