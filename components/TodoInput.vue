<template>
  <form data-test="todo-form" class="w-full mt-20" @submit.prevent="addTodo()">
    <div class="flex items-stretch">
      <input
        v-model="todo"
        data-test="todo-input"
        type="text"
        placeholder="Type todo..."
        class="flex-grow px-2 py-2 text-xl rounded-l-md focus:outline-none"
      >
      <button
        data-test="todo-submit-button"
        class="bg-green-400 hover:bg-green-500 text-white rounded-r-md px-3"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { nanoid } from 'nanoid'
import { Todo } from '~/utils/types'

@Component({
  name: 'TodoInput'
})
export default class TodoInput extends Vue {
  @Prop() todos!: Todo[];
  todo: string = '';

  // This function adds new todo
  addTodo (): void {
    if (!this.todo) {
      return
    }

    const newTodo: Todo = {
      id: nanoid(),
      title: this.todo,
      completed: false
    }

    this.todos.push(newTodo)
    this.todo = '' // reset
  }
}
</script>

<style scoped></style>
