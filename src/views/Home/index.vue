<template>
  <div class="home">
    <b-row class="my-3">
      <b-col>
        <SearchResult :pokemons_input="pokemons" />
      </b-col>
    </b-row>
    <b-row>
      <b-container>
          <b-col>
            <b-button variant="success" class="mx-2" v-if="prev != null" @click="previous">Previous</b-button>
            <b-button variant="success" class="mx-2" v-if="next != null" @click="next_">Next</b-button>
          </b-col>
      </b-container>
    </b-row>
  </div>
</template>

<script>
import SearchResult from './SearchResult'
import { getPokemon, getPokemons } from '../../api/pokemons'
export default {
  name: 'Home',
  components: { SearchResult },
  data () {
    return {
      pokemons: {},
      next: 0,
      prev: 0
    }
  },
  methods: {
    async next_ () {
      this.searchPokemons(this.next)
    },
    async previous () {
      this.searchPokemons(this.prev)
    },
    getPrev_Next (query) {
      if (query.next) {
        this.next = parseInt(query.next.split('/')[6].replace('?offset=', '').replace('&limit=', ' ').split(' ')[0])
      } else {
        this.next = null
      }
      if (query.previous) {
        this.prev = parseInt(query.previous.split('/')[6].replace('?offset=', '').replace('&limit=', ' ').split(' ')[0])
      } else {
        this.prev = null
      }
    },
    async searchPokemons (from) {
      const result = (await getPokemons(from, 20)).data
      let pokemons = result.results.map(pokemon => parseInt(pokemon.url.split('/')[6]))
      pokemons = pokemons.map(pokemon => getPokemon(pokemon))
      pokemons = await Promise.all(pokemons)
      this.pokemons = pokemons.map(pokemon => pokemon.data)
      this.getPrev_Next(result)
    }

  },
  async created () {
    this.searchPokemons(this.next)
  }
}
</script>
