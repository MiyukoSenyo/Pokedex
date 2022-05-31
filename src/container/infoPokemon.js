import React, { useState, useEffect } from 'react';
import PokemonCard from '../composants/PokemonCard';
import Header from '../composants/Header';
import { getPokemons, getMorePokemons } from '../services/pokemons';

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const morePokemon = () => {
    getMorePokemons(count + 19).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount + 20;
      });
    });
  };

  const lessPokemon = () => {
    getMorePokemons(count - 21).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount - 20;
      });
    });
  };

  return (
    <>
      <Header />
      <div className='cards'>
        {
          pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.id} {...pokemon} id={pokemon.id} />;
          })}
      </div>
      <div className='footer'>
        <div className='btn' onClick={lessPokemon}>
          <h3 className='btn__text'>Back</h3>
        </div>
        <div className='btn' onClick={morePokemon}>
          <h3 className='btn__text'>Next</h3>
        </div>
      </div>
    </>
  );
};

export default AllPokemon;