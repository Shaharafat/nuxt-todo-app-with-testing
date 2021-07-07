<template>
  <ul data-test="todo-list">
    <li v-for="(todo, index) in todos" :key="index" data-test="todo-list-item" class="list-item">
      <single-todo data-test="todo-content" :content="todo" @toggle-todo-complete="emitToggleTodo" @remove-todo="emitRemoveTodo" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Todo } from '~/utils/types'

@Component({
  name: 'TodoList'
})
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
