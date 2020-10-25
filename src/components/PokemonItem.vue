<template>
  <div class="item mx-1 my-2" style="cursor: pointer;">
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
  }
}
</script>

<style lang="scss" scoped>
  div{
    border-radius: 5px;
    color: white;
  }

  .grass{
    background-color: #9BCC50;
    color: black;
  }

  .poison{
    background-color: #B97FC9;
  }

  .fire{
    background-color: #FD7D24;
  }

  .water{
    background-color: #4592C4;
  }

  .bug{
    background-color: #729F3F;
  }

  .normal{
    background-color: #A4ACAF;
  }

  .normal{
    background-color: #A4ACAF;
  }

  .electric{
    background-color: #EED535;
    color: black;
  }

  .fairy{
    background-color: #FDB9E9;
    color: black;
  }

  .steel{
    background-color:#9EB7B8;
    color: black;
  }

  .ice{
    background-color: #51C4E7;
    color: black;
  }

  .fighting{
    background-color:#D56723;
  }

  .ghost{
    background-color:#7B62A3;
  }

  .psychic{
    background-color: #F366B9;
  }

  .dark{
    background-color:#707070;
  }

  .rock{
    background-color: #A38C21;
  }

  .flying{
    background: linear-gradient(#3DC7EF, #BDB9B8);
    color: black;
  }

  .ground{
    background: linear-gradient(#F7DE3F,#AB9842);
    color: black;
  }

  .dragon{
    background: linear-gradient(#53A4CF,#F16E57);
  }
</style>
