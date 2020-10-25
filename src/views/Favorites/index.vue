<template>
  <div>
    <h1>Favorites</h1>
    <b-row>
      <div v-for="(item, index) in pokemons" :key="index">
        <b-col cols="12" md="auto">
          <PokemonItem :item="item" />
        </b-col>
      </div>
    </b-row>
  </div>
</template>

<script>
import { getFavorites } from '../../backend/controllers/pokemonController'
import { getCurrentUser } from '../../backend/controllers/pokeTrainerController'
import { getPokemon } from '../../api/pokemons'
import PokemonItem from '../../components/PokemonItem'
export default {
  name: 'Favorites',
  components: { PokemonItem },
  data () {
    return {
      pokemons: []
    }
  },
  methods: {
    async searchPokemons () {
      const ids = await getFavorites(getCurrentUser().uid)
      let pokemons = ids.map(id => getPokemon(id))
      pokemons = await Promise.all(pokemons)
      this.pokemons = pokemons.map(pokemon => pokemon.data)
    }
  },
  created () {
    this.searchPokemons()
  }
}
</script>
