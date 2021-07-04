<template>
  <div class="w-11/12 sm:w-9/12 md:w-5/12 lg:w-4/12">
    <todo-input :todos="todos" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AppContainer extends Vue {
  todos: string[] = []
}
</script>

<style scoped>

</style>
