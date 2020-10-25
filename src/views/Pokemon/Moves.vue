<template>
  <div>
    <h2>Moves</h2>
    <b-row>
      <div v-for="(item, index) in moves" :key="index">
        <b-col cols="12" md="auto">
          <p>{{ item.move.name }}</p>
        </b-col>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Moves',
  props: ['moves']
}
</script>
