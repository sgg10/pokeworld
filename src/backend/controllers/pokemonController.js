import { update, getPokeTrainerData } from '../models/pokemon'

const addFavoritesPokemon = async (id, pokemon) => {
  const favoritesPokemons = (await getPokeTrainerData(id)).data().favorites_pokemons
  if (!favoritesPokemons.includes(pokemon)) {
    favoritesPokemons.push(pokemon)
    await update(id, { favorites_pokemons: favoritesPokemons })
    return true
  }
  return false
}

const deleteFavoritesPokemon = async (id, pokemon) => {
  const favoritesPokemons = (await getPokeTrainerData(id)).data().favorites_pokemons
  const index = favoritesPokemons.indexOf(pokemon)
  if (index !== -1) {
    favoritesPokemons.splice(index, 1)
    await update(id, { favorites_pokemons: favoritesPokemons })
    return true
  }
  return false
}

export { addFavoritesPokemon, deleteFavoritesPokemon }
