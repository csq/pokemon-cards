import { Pokedex } from 'pokeapi-js-wrapper';
export { ListPokemons };

const pokeApi = new Pokedex();

const ListPokemons = async (offset = 0, limit = 10) => {
  const pokemonsList = [];

  try {
    const pokemons = await pokeApi.getPokemonsList({
      limit: limit,
      offset: offset
    });

    for (let i = 0; i < pokemons.results.length; i++) {
      const response = await pokeApi.getPokemonByName(pokemons.results[i].name);
      let pokemon = {};
      pokemons.results[i].id = response.id;
      pokemons.results[i].name = response.name;
      pokemons.results[i].types = response.types.map((type) => type.type.name);
      pokemons.results[i].attack = response.stats.find((stat) => stat.stat.name === 'attack').base_stat;
      pokemons.results[i].defense = response.stats.find((stat) => stat.stat.name === 'defense').base_stat;
      pokemons.results[i].speed = response.stats.find((stat) => stat.stat.name === 'speed').base_stat;
      pokemons.results[i].hp = response.stats.find((stat) => stat.stat.name === 'hp').base_stat;
      pokemons.results[i].image = response.sprites.other.dream_world.front_default;

      pokemon = pokemons.results[i];
      pokemonsList.push(pokemon);
    }

  } catch (error) {
    console.error('Error in ListPokemons:', error);
  }

  return pokemonsList;
}

export default { ListPokemons };
