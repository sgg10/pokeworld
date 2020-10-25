<template>
  <div class="home">
    <b-row>
      <div class="mx-5 my-2"
        v-for="(item, index) in types" :key="index"
        :class="item || 'null'"
        style="cursor: pointer;"
        @click="type = item; searchPokemons(null)"
      >
        <b-col>
          {{item || 'Null'}}
        </b-col>
      </div>
    </b-row>
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
import { getPokemon, getPokemons, getPokemonsByType } from '../../api/pokemons'
export default {
  name: 'Home',
  components: { SearchResult },
  data () {
    return {
      pokemons: {},
      next: 0,
      prev: 0,
      types: ['grass', 'poison', 'fire', 'water', 'bug', 'normal', 'electric', 'fairy', 'steel',
        'ice', 'fighting', 'ghost', 'psychic', 'dark', 'rock', 'flying', 'ground', 'dragon', ''],
      type: null
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
      try {
        let result = null
        let pokemons = null
        if (!this.type) {
          result = (await getPokemons(from, 20)).data
          pokemons = result.results.map(pokemon => parseInt(pokemon.url.split('/')[6]))
        } else {
          result = (await getPokemonsByType(this.type)).data
          pokemons = result.pokemon.map(pokemon => parseInt(pokemon.pokemon.url.split('/')[6]))
        }
        pokemons = pokemons.map(pokemon => getPokemon(pokemon))
        pokemons = await Promise.all(pokemons)
        this.pokemons = pokemons.map(pokemon => pokemon.data)
        if (!this.type) {
          this.getPrev_Next(result)
        }
      } catch (error) {
        console.error(error)
      }
    }

  },
  async created () {
    this.searchPokemons(this.next)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colorsType.scss';
.null{
  background-color: gray;
}
</style>
