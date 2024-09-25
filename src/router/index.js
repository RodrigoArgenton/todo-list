import CompletedTask from '@/views/CompletedTask.vue'
import Home from '@/views/Home.vue'
import AllTask from '@/views/Task/index.vue'
import DueTask from '@/views/Task/DueTask/index.vue'
import TodayTask from '@/views/Task/TodayTask/index.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task/AllTask',
    name: 'AllTask',
    component: AllTask
  },
  {
    path: '/task/TodayTask',
    name: 'TodayTask',
    component: TodayTask
  },
  {
    path: '/task/DueTask',
    name: 'DueTask',
    component: DueTask
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
