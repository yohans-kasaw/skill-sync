import { createRouter, createWebHistory } from 'vue-router'
import route_info from '@/lib/route_info.js'

const route = createRouter({
    history: createWebHistory(),
    routes: route_info
})

route.beforeEach((to, _, next) => {
    document.title = to.name?.toString() || "Skill-Sync"
    next()
})

export default route
