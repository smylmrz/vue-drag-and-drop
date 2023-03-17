<template>
  <div class="cursor-pointer p-2 bg-white shadow rounded-md" draggable="true">
    <div class="text-lg font-medium mb-2">{{ task.title }}</div>
    <div class="text-sm">{{ task.description }}</div>
  </div>
</template>

<script setup lang="ts">
import { Task as TaskType } from "../tasks";

defineProps<{
  task: TaskType
}>()

</script>
