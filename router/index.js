import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../layouts/index.vue'),
    children: [
      {
        path: '',
        redirect: {
          name: 'Playground'
        }
      },
      {
        path: 'playground',
        name: 'Playground',
        component: () => import('../components/playground/index.vue')
      }
    ]
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../layouts/index.vue'),
    children: [
      {
        path: '',
        redirect: {
          name: 'Alert'
        }
      },
      {
        path: 'alert',
        name: 'Alert',
        component: () => import('../components/components/Alert.vue')
      },
      {
        path: 'navigation',
        name: 'Navigation',
        component: () => import('../components/components/Navigation.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
