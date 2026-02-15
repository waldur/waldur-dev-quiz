import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: () => import('@/views/MenuView.vue'),
    },
    {
      path: '/skills',
      name: 'skillTree',
      component: () => import('@/views/SkillTreeView.vue'),
    },
    {
      path: '/skills/:skillId',
      name: 'skillDetail',
      component: () => import('@/views/SkillDetailView.vue'),
      props: true,
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('@/views/QuizView.vue'),
    },
    {
      path: '/results',
      name: 'results',
      component: () => import('@/views/ResultsView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
    },
    {
      path: '/shared',
      name: 'sharedProfile',
      component: () => import('@/views/SharedProfileView.vue'),
    },
  ],
})

export default router
