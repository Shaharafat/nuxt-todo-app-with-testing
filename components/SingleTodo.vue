<template>
  <li>{{ singleTodo }}</li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SingleTodo extends Vue {
  @Prop() singleTodo! :string
}
</script>

<style scoped>

</style>
