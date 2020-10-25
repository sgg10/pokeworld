import { get } from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2'

const getPokemons = (from, limit) => get(`${BASE_URL}/pokemon/?offset=${from}&limit=${limit}`)

const getPokemon = id => get(`${BASE_URL}/pokemon/${id}`)

const getPokemonEvolution = id => get(`${BASE_URL}/evolution-chain/${id}`)

const getPokemonsByType = type => get(`${BASE_URL}/type/${type}`)

export { getPokemons, getPokemon, getPokemonEvolution, getPokemonsByType }
