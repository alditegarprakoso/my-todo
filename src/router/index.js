import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Todo from '@/views/todo/Todo.vue'
import News from '@/views/news/News.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})

export default router
