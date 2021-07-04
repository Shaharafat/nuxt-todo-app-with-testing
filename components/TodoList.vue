<template>
  <ul>
    <single-todo v-for="(todo, index) in todos" :key="index">
      {{ todo }}
    </single-todo>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TodoList extends Vue {
  @Prop() todos!: string[];
}
</script>

<style scoped>

</style>
