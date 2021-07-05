<template>
  <div class="w-11/12 sm:w-9/12 md:w-5/12 lg:w-4/12">
    <todo-input :todos="todos" />
    <todo-list :todos="todos" @toggle-todo-complete="toggleTodo" @remove-todo="removeTodo" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Todo } from '~/utils/types'

@Component
export default class AppContainer extends Vue {
  todos: Todo[] = []

  // This will toggle the todo completed
  toggleTodo (id:string):void {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
  }

  // This will remove a todo from list
  removeTodo (id:string):void {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
}
</script>

<style scoped>

</style>
