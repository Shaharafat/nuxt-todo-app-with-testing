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
      <todo-input :todos="todos" />
      <todo-list :todos="todos" @toggle-todo-complete="toggleTodo" @remove-todo="removeTodo" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import gsap from 'gsap'
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

  // asyncdata fetch () {
  //   this.todos = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5').then(res => res.json())
  // }

  // This is animation for every list item
  animation () {
    gsap.from('.list-item', { y: 50, duration: 0.5, opacity: 0, stagger: 0.5 })
  }

  // run animation on mount
  mounted () {
    this.animation()
  }
}
</script>

<style scoped>

</style>
