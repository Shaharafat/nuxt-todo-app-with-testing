<template>
  <div class="w-11/12 sm:w-9/12 md:w-5/12 lg:w-4/12">
    <!-- <p v-if="$fetchState.pending">
      loading...
    </p>
    <p v-else-if="$fetchState.erro">
      error...
    </p> -->
    <!-- <div v-else> -->
    <div>
      <todo-input data-test="todo-input-container" :todos="todos" />
      <todo-list data-test="todo-list-container" :todos="todos" @toggle-todo-complete="toggleTodo" @remove-todo="removeTodo" />
    </div>
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
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  }

  // This will remove a todo from list
  removeTodo (id:string):void {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  // async fetch () {
  //   this.todos = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5').then(res => res.json())
  // }
}
</script>

<style scoped>

</style>
