import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import About from '../views/AboutView.vue'
import Housing from '../views/HousingView.vue'
import NotFound from '../views/NotFoundView.vue'

const routes = [
  // { path: '/', component: () => import('../views/HomeView')  },
  { 
    path: '/', 
    name: 'home',
    component: Home 
  },
  { 
    path: '/about', 
    name: 'about',
    component: About 
  },
  { 
    path: '/housing:id', 
    name: 'housing',
    component: Housing 
  },
  { 
    path: '/:pathMatch(.*)', 
    name: "NotFound",
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
