<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Add task" v-model="newTask" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";

const taskStore = useTaskStore();
const newTask = ref("");

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random() * 100000),
    });
    newTask.value = "";
  }
};
</script>
