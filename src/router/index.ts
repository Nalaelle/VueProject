import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/HomeView.vue'
import About from '../views/AboutView.vue'
import Housing from '../views/HousingView.vue'
import NotFound from '../views/NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  // { path: '/', component: () => import('../views/HomeView')  },

  { 
    path: '/', 
    name: 'layout',
    component: Layout,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/about', name: 'about', component: About },
      { path: '/housing:id', name: 'housing', component: Housing, props: true }

    ]
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


// const routes: RouteRecordRaw[] = [
//   {
//     path: '/mon-chemin',
//     component: MonComposant,
//     props: {
//       maPropStatique: 'Valeur statique',
//     },
//     children: [
//       {
//         path: 'enfant/:id',
//         component: EnfantComposant,
//         props: (route) => ({
//           id: Number(route.params.id),
//           autreProp: 'Valeur calculée',
//         }),
//       },
//     ]