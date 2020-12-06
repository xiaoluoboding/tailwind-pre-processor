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
    path: '/utilities',
    name: 'Utilities',
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
        component: () => import('../components/utilities/Alert.vue')
      },
      {
        path: 'navigation',
        name: 'Navigation',
        component: () => import('../components/utilities/Navigation.vue')
      },
      {
        path: 'animation',
        name: 'Animation',
        component: () => import('../components/utilities/Animation.vue')
      },
      {
        path: 'gradient-color',
        name: 'Gradient Color',
        component: () => import('../components/utilities/GradientColor.vue')
      },
      {
        path: 'font-variant-numeric',
        name: 'FontVariantNumeric',
        component: () => import('../components/utilities/FontVariantNumeric.vue')
      },
      {
        path: 'grid-auto-columns',
        name: 'GridAutoColumns',
        component: () => import('../components/utilities/GridAutoColumns.vue')
      },
      {
        path: 'text-overflow',
        name: 'TextOverflow',
        component: () => import('../components/utilities/TextOverflow.vue')
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
