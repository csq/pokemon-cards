import { Pokedex } from 'pokeapi-js-wrapper';

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
      let pokemon = {
        id: response.id,
        name: response.name,
        types: response.types.map((type) => type.type.name),
        attack: response.stats.find((stat) => stat.stat.name === 'attack').base_stat,
        defense: response.stats.find((stat) => stat.stat.name === 'defense').base_stat,
        speed: response.stats.find((stat) => stat.stat.name === 'speed').base_stat,
        hp: response.stats.find((stat) => stat.stat.name === 'hp').base_stat,
        image: response.sprites.other.dream_world.front_default
      };

      pokemonsList.push(pokemon);
    }

  } catch (error) {
    console.error('Error in ListPokemons:', error);
  }

  return pokemonsList;
}

const getDataPokemonByName = async (name) => {
  try { 
    const response = await pokeApi.getPokemonByName(name);

    let pokemon = {
      id: response.id,
      name: response.name,
      types: response.types.map((type) => type.type.name),
      attack: response.stats.find((stat) => stat.stat.name === 'attack').base_stat,
      defense: response.stats.find((stat) => stat.stat.name === 'defense').base_stat,
      speed: response.stats.find((stat) => stat.stat.name === 'speed').base_stat,
      hp: response.stats.find((stat) => stat.stat.name === 'hp').base_stat,
      image: response.sprites.other.dream_world.front_default
    };

    return pokemon;

  } catch (error) {
    console.error('Error in getDataPokemonByName:', error);
  }
}

const ListEvolutionsChain = async (pokemonName) => {
  const evolutionList = [];

  try {
    // Obtain the ID of the evolution chain
    const speciesData = await pokeApi.getPokemonSpeciesByName(pokemonName);
    const evolutionChainId = speciesData.evolution_chain.url.split('/').slice(-2, -1)[0]; // Extract the ID from the URL

    // Get the evolution chain from the PokeAPI using the ID
    const evolutionChain = await pokeApi.getEvolutionChainById(evolutionChainId);
    const chain = evolutionChain.chain;

    // Add the base pokemon to the list
    let basePokemon = await getDataPokemonByName(chain.species.name);
    evolutionList.push(basePokemon);

    // Recursive function to get all evolutions
    const getEvolutions = async (evolvesTo) => {
      for (let i = 0; i < evolvesTo.length; i++) {
        let pokemon = await getDataPokemonByName(evolvesTo[i].species.name);
        evolutionList.push(pokemon);
        // Llamar recursivamente si hay más evoluciones
        if (evolvesTo[i].evolves_to.length > 0) {
          await getEvolutions(evolvesTo[i].evolves_to);
        }
      }
    };

    // Get all evolutions
    await getEvolutions(chain.evolves_to);

  } catch (error) {
    console.error('Error in ListEvolutionsChain:', error);
  }

  return evolutionList;
};


export { ListPokemons, ListEvolutionsChain, getDataPokemonByName };
