<template>
  <div class="mx-auto mt-20 max-w-7xl gap-10 grid grid-cols-12">

    <div class="col-span-4 h-full">
      <Card :is-dragging="isDragging" :item-count="todo.length" title="Todo" @drop="onDrop($event, 'To do')">
        <template #body>
          <div class="space-y-2">
            <Task v-for="task in todo" :key="task.id" :task="task" @dragstart="startDrag($event, task)"/>
          </div>
        </template>
      </Card>
    </div>

    <div class="col-span-4 h-full">
      <Card :is-dragging="isDragging" :item-count="inProgress.length" title="In Progress" @drop="onDrop($event, 'In Progress')">
        <template #body>
          <div class="space-y-2">
            <Task v-for="task in inProgress" :key="task.id" :task="task" @dragstart="startDrag($event, task)"/>
          </div>
        </template>
      </Card>
    </div>

    <div class="col-span-4 h-full">
      <Card :is-dragging="isDragging" :item-count="completed.length" title="Done" @drop="onDrop($event, 'Done')">
        <template #body>
          <div class="space-y-2">
            <Task v-for="task in completed" :key="task.id" :task="task" @dragstart="startDrag($event, task)"/>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Task from "./components/Task.vue";
import Card from "./components/Card.vue";
import { tasks, Task as TaskInterface } from "./tasks";

const isDragging = ref(false)
const todo = computed(() => tasks.value.filter((item) => item.status === 'To do'))
const inProgress = computed(() => tasks.value.filter((item) => item.status === 'In Progress'))
const completed = computed(() => tasks.value.filter((item) => item.status === 'Done'))

const startDrag = (event: DragEvent, item: TaskInterface) => {

  isDragging.value = true

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move"
    event.dataTransfer.effectAllowed = "move"
    event.dataTransfer.setData('item', item.title)
  }
}

const onDrop = (event: DragEvent, status: string) => {

  isDragging.value = false

  if (event.dataTransfer) {
    const itemTitle = event.dataTransfer.getData('item')
    const task = tasks.value.find(task => task.title === itemTitle)

    if (task) {
      task.status = status
    }
  }
}
</script>
