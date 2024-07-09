import CompletedTask from '@/views/CompletedTask.vue'
import Home from '@/views/Home.vue'
import Task from '@/views/Task.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
  },
  {
    path: '/completedtask',
    name: 'Completedtask',
    component: CompletedTask
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
