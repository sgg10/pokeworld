<template>
  <div @click="goPokemon(item.id)" class="item mx-1 my-2" style="cursor: pointer;">
    <b-row>
      <b-col>
        <b-img :src="item.sprites.front_default" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <small>N°{{item.id}}</small>
        <p>{{item.name}}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-container>
        <div v-for="(item, index) in item.types" :key="index">
          <b-col cols="12" md="auto">
            <div class="px-2" :class="item.type.name"><p>{{item.type.name}}</p></div>
          </b-col>
        </div>
      </b-container>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'PokemonItem',
  props: ['item'],
  computed: {
    getClass () {
      return true
    }
  },
  methods: {
    goPokemon (id) {
      this.$router.push({ path: `/pokemon/${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colorsType.scss';
</style>
