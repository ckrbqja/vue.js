import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () =>
            import(/* webpackChunkName: "about", webpackPrefetch:true */ "../views/Contact.vue"),
    },
    {
        path: "/basic",
        name: "Basic",
        component: () =>
            import(/* webpackChunkName: "about", webpackPrefetch:true */ "../views/Basic.vue"),
    },
    {
        path: "/DataBindingHtml",
        name: "DataBindingHtml",
        component: () =>
            import(
                /* webpackChunkName: "about", webpackPrefetch:true */ "../views/DataBindingHtml.vue"
            ),
    },
    {
        path: "/DataFind",
        name: "DataFind",
        component: () =>
            import(/* webpackChunkName: "about", webpackPrefetch:true */ "../views/DataFind.vue"),
    },
    {
        path: "/DataInput",
        name: "DataInput",
        component: () =>
            import(/* webpackChunkName: "about", webpackPrefetch:true */ "../views/DataInput.vue"),
    },
    {
        path: "/ServerData",
        name: "ServerData",
        component: () =>
            import(/* webpackChunkName: "about", webpackPrefetch:true */ "../views/ServerData.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
