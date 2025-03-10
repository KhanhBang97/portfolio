import { createRouter, createWebHistory } from "vue-router"
import adminRouters from "./AdminRoute"
import clientRouters from "./ClientRoute"

const routes = [clientRouters,adminRouters]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router