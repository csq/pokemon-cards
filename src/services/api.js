const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["grass", "poison"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
  },
  {
    id: 4,
    name: "Charmander",
    types: ["fire"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
  },
  {
    id: 7,
    name: "Squirtle",
    types: ["water"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
  },
  {
    id: 10,
    name: "Caterpie",
    types: ["bug"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg"
  },
  {
    id: 13,
    name: "Weedle",
    types: ["bug", "poison"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg"
  },
  {
    id: 16,
    name: "Pidgey",
    types: ["normal", "flying"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg"
  },
  {
    id: 19,
    name: "Rattata",
    types: ["normal"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg"
  },
  {
    id: 21,
    name: "Spearow",
    types: ["normal", "flying"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg"
  },
  {
    id: 23,
    name: "Ekans",
    types: ["poison"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg"
  },
  {
    id: 25,
    name: "Pikachu",
    types: ["electric"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
  },
  {
    id: 27,
    name: "Sandshrew",
    types: ["ground"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg"
  },
  {
    id: 29,
    name: "Nidoran♀",
    types: ["poison"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg"
  },
  {
    id: 32,
    name: "Nidoran♂",
    types: ["poison"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg"
  },
  {
    id: 35,
    name: "Clefairy",
    types: ["fairy"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg"
  },
  {
    id: 38,
    name: "Vulpix",
    types: ["fire"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg"
  },
  {
    id: 41,
    name: "Oddish",
    types: ["grass", "poison"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/41.svg"
  },
  {
    id: 44,
    name: "Gloom",
    types: ["grass", "poison"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/44.svg"
  },
  {
    id: 47,
    name: "Paras",
    types: ["bug", "grass"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/47.svg"
  },
  {
    id: 50,
    name: "Diglett",
    types: ["ground"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/50.svg"
  },
  {
    id: 52,
    name: "Meowth",
    types: ["normal"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg"
  },
  {
    id: 55,
    name: "Mankey",
    types: ["fighting"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/55.svg"
  },
  {
    id: 58,
    name: "Ivysaur",
    types: ["grass", "poison"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
  },
  {
    id: 61,
    name: "Venusaur",
    types: ["grass", "poison"],
    attack: 49,
    defense: 49,
    speed: 45,
    hp: 45,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
  }
];

const searchPokemonByName = (pokemonName) => {
  for (let pokemon in pokemons) {
    if (pokemons[pokemon].name === pokemonName) {
      return pokemons[pokemon];
    }
  }
  return null;
};

const evolutionChain = {
  Bulbasaur: ["Ivysaur", "Venusaur", "Ivysaur", "Venusaur", "Ivysaur", "Venusaur", "Ivysaur", "Venusaur"],
  Charmander: ["Charmeleon", "Charizard"],
  Squirtle: ["Wartortle", "Blastoise"],
  Caterpie: ["Metapod", "Butterfree"],
  Weedle: ["Kakuna", "Beedrill"],
  Pidgey: ["Pidgeotto", "Pidgeot"],
  Rattata: ["Raticate"],
  Spearow: ["Fearow"],
  Ekans: ["Arbok"],
  Pikachu: ["Raichu"],
  Sandshrew: ["Sandslash"],
  "Nidoran♀": ["Nidorina", "Nidoqueen"],
  "Nidoran♂": ["Nidorino", "Nidoking"],
  Clefairy: ["Clefable"],
  Vulpix: ["Ninetales"],
  Oddish: ["Gloom", "Vileplume", "Bellossom"],
  Paras: ["Parasect"],
  Diglett: ["Dugtrio"],
  Meowth: ["Persian"],
  Mankey: ["Primeape"]
};

const searchPokemonEvolution = (pokemonName) => {
  for (let pokemon in evolutionChain) {
    if (pokemon === pokemonName) {
      return evolutionChain[pokemon];
    }
  }
  return null;
};

export default { pokemons, searchPokemonByName, evolutionChain, searchPokemonEvolution };
