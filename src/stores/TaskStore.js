import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";


export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: useStorage( 'tasks',[
        { id: 1, title: "jog asdasd", isFav: false },
        { id: 2, title: "run fast", isFav: true },
      ]) 
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favCount: (state) => {
      return state.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
    },
    toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
    },
  },
});
