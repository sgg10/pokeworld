import { get } from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2'

function getItems (from, limit) {
  const url = `${BASE_URL}/item/?offset=${from}&limit=${limit}`
  return get(url)
}

function getItem (id) {
  const url = `${BASE_URL}/item/${id}`
  return get(url)
}

export { getItem, getItems }
