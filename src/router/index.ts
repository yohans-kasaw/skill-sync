import { createRouter, createWebHistory } from 'vue-router'

const route = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue'),
        },
        {
            path: '/should-i-apply',
            name: 'shoul-i-apply',
            component: () => import('../views/ShouldIApply.vue')
        },
        {
            path: '/cover-letter',
            name: 'cover-letter',
            component: () => import('../views/CoverLetter.vue')
        },
    ]
})

export default route
