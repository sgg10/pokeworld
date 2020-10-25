<template>
  <div>
    <b-row>
      <b-col>
        <b-img :src="pokemon.sprites.front_default" height="250" ></b-img>
      </b-col>
      <b-col>
        <b-row>
          <b-container>
            <h2>Basic information</h2>
            <b-row>
              <b-col>
                <p><strong>Name: </strong>{{ pokemon.name }}</p>
              </b-col>
              <b-col>
                <p><strong>N° in Pokedex: </strong>{{ pokemon.id }}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <p><strong>Weight: </strong>{{ pokemon.weight }}</p>
              </b-col>
              <b-col>
                <p><strong>Height: </strong>{{ pokemon.height }}</p>
              </b-col>
            </b-row>
          </b-container>
        </b-row>
        <b-row>
          <b-col>
            <b-button @click="add" v-if="user && !inFavorites" variant="success">Add to favorites pokemons</b-button>
            <b-button @click="remove" v-if="user && inFavorites" variant="danger" >Remove from favorites pokemons</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <div v-for="(item, index) in pokemon.types" :key="index">
        <b-col cols="12" md="auto">
          <div class="px-2" :class="item.type.name"><p>{{item.type.name}}</p></div>
        </b-col>
      </div>
    </b-row>
    <b-row>
      <b-container>
        <Sprites :sprites="pokemon.sprites"/>
      </b-container>
    </b-row>
    <b-row>
      <b-col>
        <Stats :stats="pokemon.stats"/>
      </b-col>
      <b-col>
        <Abilities :abilities="pokemon.abilities" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Moves :moves="pokemon.moves"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { getPokemon } from '../../api/pokemons'
import Sprites from './Sprites'
import Stats from './Stats'
import Moves from './Moves'
import Abilities from './Abilities'
import { addFavoritesPokemon, deleteFavoritesPokemon, getFavorites } from '../../backend/controllers/pokemonController'
import { getCurrentUser } from '../../backend/controllers/pokeTrainerController'
export default {
  name: 'Pokemon',
  components: { Sprites, Stats, Moves, Abilities },
  data () {
    return {
      pokemon: {},
      user: null,
      inFavorites: false
    }
  },
  methods: {
    async add () {
      if (await addFavoritesPokemon(this.user.uid, this.pokemon.id)) {
        this.inFavorites = true
      }
    },
    async remove () {
      if (await deleteFavoritesPokemon(this.user.uid, this.pokemon.id)) {
        this.inFavorites = false
      }
    }
  },
  async created () {
    this.pokemon = (await getPokemon(this.$route.params.id)).data
    this.user = getCurrentUser()
    if (this.user) {
      if ((await getFavorites(this.user.uid)).includes(this.pokemon.id)) {
        this.inFavorites = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colorsType.scss';
</style>
