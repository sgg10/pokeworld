import { get } from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2'

function getPokemons (from, limit) {
  const url = `${BASE_URL}/pokemon/?offset=${from}&limit=${limit}`
  return get(url)
}

function getPokemon (id) {
  const url = `${BASE_URL}/pokemon/${id}`
  return get(url)
}

function getPokemonEvolution (id) {
  const url = `${BASE_URL}/evolution-chain/${id}`
  return get(url)
}

export { getPokemons, getPokemon, getPokemonEvolution }
