import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Playground'
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
      },
      {
        path: 'animation',
        name: 'Animation',
        component: () => import('../components/components/Animation.vue')
      },
      {
        path: 'gradient-color',
        name: 'Gradient Color',
        component: () => import('../components/components/GradientColor.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../layouts/index.vue'),
    children: [
      {
        path: '',
        redirect: {
          name: 'AboutIndex'
        }
      },
      {
        path: 'about-index',
        name: 'AboutIndex',
        component: () => import('../views/About.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
