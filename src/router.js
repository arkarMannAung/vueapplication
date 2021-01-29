import {createRouter, createWebHistory} from 'vue-router'
// import {createRouter, createWebHashHistory} from 'vue-router'
import home from "./pages/home";
import dcHero from "./pages/dcHero";
import calendar from "./pages/calendar";
const routes = [
    {path:'/',component:home},
    {path:'/dc-hero',component:dcHero},
    {path:'/calendar',component:calendar},
];
const router=createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
});
export default router;