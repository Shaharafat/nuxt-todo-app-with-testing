<template>
  <form class="w-full" @submit.prevent="addTodo()">
    <div class="flex items-stretch ">
      <input v-model="todo" type="text" placeholder="Type todo..." class="flex-grow px-2 py-2 text-xl rounded-l-md focus:outline-none">
      <button class="bg-green-400 hover:bg-green-500 text-white rounded-r-md px-3  ">
        Add
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TodoInput extends Vue {
  @Prop() todos!:string[]
  todo: string =''

  // This function adds new todo
  addTodo ():void {
    this.todos.push(this.todo)
    this.todo = ''
  }
}
</script>

<style scoped>

</style>
