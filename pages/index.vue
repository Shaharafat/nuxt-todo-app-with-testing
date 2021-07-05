<template>
  <div class="min-h-screen bg-green-200 ">
    <div class="flex justify-center grid grid-cols-1 justify-items-center px-2">
      <app-container />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {}
</script>
