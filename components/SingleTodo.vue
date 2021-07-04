<template>
  <li>
    <slot />
  </li>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SingleTodo extends Vue {
}
</script>

<style scoped>

</style>
