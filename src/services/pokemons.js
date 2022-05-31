const URL = "http://localhost:3000/pokemons";

export const getPokemons = () => {
  return fetch(URL).then((response) => response.json());
};

export const getMorePokemons = () => {
  return fetch(`${URL}`).then((response) =>
    response.json()
  );
};