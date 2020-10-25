<template>
  <div>
    <b-row>
      <div v-for="(item, index) in pokemons_input" :key="index">
        <b-col cols="12" md="auto">
          <PokemonItem :item="item" />
        </b-col>
      </div>
    </b-row>
  </div>
</template>

<script>
import PokemonItem from '../../components/PokemonItem'
export default {
  name: 'SearchResult',
  props: ['pokemons_input'],
  components: { PokemonItem },
  data () {
    return {
      pokemons: []
    }
  },
  async created () {
    this.pokemons = []
  }
}
</script>
