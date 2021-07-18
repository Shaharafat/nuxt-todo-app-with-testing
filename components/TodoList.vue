<template>
  <div>
    <ul data-test="todo-list">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        data-test="todo-list-item"
        class="list-item"
      >
        <single-todo
          data-test="todo-content"
          :content="todo"
          @toggle-todo-complete="emitToggleTodo"
          @remove-todo="emitRemoveTodo"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import gsap from "gsap";
import { Todo } from "~/utils/types";

@Component({
  name: "TodoList"
})
export default class TodoList extends Vue {
  @Prop() todos!: Todo[];

  emitToggleTodo(id: string): void {
    this.$emit("toggle-todo-complete", id);
  }

  emitRemoveTodo(id: string): void {
    this.$emit("remove-todo", id);
  }

  // This is animation for every list item
  animation() {
    gsap.from(".list-item", { y: 50, duration: 0.5, opacity: 0, stagger: 0.5 });
  }

  // run animation on mount
  mounted() {
    this.animation();
  }
}
</script>

<style scoped></style>
