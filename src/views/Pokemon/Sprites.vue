<template>
  <div>
    <b-row>
      <b-col cols="12" md="auto">
        <b-img :src="sprites.front_default"></b-img>
      </b-col>
      <b-col cols="12" md="auto">
        <b-img :src="sprites.back_default"></b-img>
      </b-col>
      <b-col cols="12" md="auto">
        <b-img :src="sprites.back_shiny"></b-img>
      </b-col>
      <b-col cols="12" md="auto">
        <b-img :src="sprites.front_shiny"></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Sprites',
  props: ['sprites']
}
</script>
