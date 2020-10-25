<template>
  <div>
    <h2>Stats</h2>
    <b-row>
      <div v-for="(item, index) in stats" :key="index">
        <b-col cols="12" md="auto">
          <p>{{ item.stat.name }}: {{ item.base_stat }}</p>
        </b-col>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  props: ['stats']
}
</script>
