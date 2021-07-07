<template>
  <div class="flex shadow-md mt-3">
    <p data-test="todo-title" :class="`flex-grow bg-white px-2 py-2 ${isTodoCompleted}`">
      {{ content.title }}
    </p>

    <!-- Completed -->
    <span
      data-test="todo-toggle"
      class="bg-green-400 hover:bg-green-500 text-white px-2 grid place-items-center"
      @click="toggleCompleted(content.id)"
    >
      <i class="fas fa-check" />
    </span>

    <!-- Trash -->
    <span
      data-test="remove-todo"
      class="bg-red-400 hover:bg-red-500 text-white px-2 grid place-items-center"
      @click="removeTodo(content.id)"
    >
      <i class="fas fa-trash" />
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Todo } from '~/utils/types'

@Component
export default class SingleTodo extends Vue {
  @Prop() content!:Todo

  get isTodoCompleted (): string {
    return this.content.completed ? 'opacity-50 line-through' : ''
  }

  // emit
  toggleCompleted (id: string):void {
    this.$emit('toggle-todo-complete', id)
  }

  removeTodo (id:string):void {
    this.$emit('remove-todo', id)
  }
}
</script>

<style scoped>

</style>
