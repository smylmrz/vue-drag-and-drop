<template>
  <div class="h-full space-y-3" @dragover.prevent>
    <div class="text-xl font-medium">
      {{ title }} <span class="opacity-50">({{ itemCount }})</span>
    </div>
    <div
        class="h-full rounded-md p-3 bg-gray-100 border-2"
        :class="isDragging && 'border-dashed border-sky-500 bg-sky-100'"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  title: string;
  itemCount: number;
  isDragging: boolean
}>()

</script>
