<template>
  <ul>
    <li class="list-item" v-for="(todo, index) in todos" :key="index">
      <single-todo :content="todo" @toggle-todo-complete="emitToggleTodo" @remove-todo="emitRemoveTodo" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Todo } from '~/utils/types'

@Component
export default class TodoList extends Vue {
  @Prop() todos!:Todo[]

  emitToggleTodo (id:string):void {
    this.$emit('toggle-todo-complete', id)
  }

  emitRemoveTodo (id:string):void {
    this.$emit('remove-todo', id)
  }
}
</script>

<style scoped>

</style>
