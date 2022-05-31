const URL = 'http://localhost:3000/pokemons';

export const getPokemon = (id) => {
  return fetch(`${URL}/${id}`).then((response) => response.json());
};