<template>
  <div>
    <h2>Abilities</h2>
    <b-row>
      <div v-for="(item, index) in abilities" :key="index">
        <b-col cols="12" md="auto">
          <p>{{ item.ability.name }}</p>
        </b-col>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Abilities',
  props: ['abilities']
}
</script>
