<template>
  <ul>
    <single-todo v-for="" />
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TodoList extends Vue {

}
</script>

<style scoped>

</style>
