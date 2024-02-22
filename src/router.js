import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/HomePage.vue";
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";

const ProfileDetails = () => import("./components/ProfileDetails.vue")
const AdminPanel = () => import("./components/AdminPanel.vue")
const UserDashboard = () => import("./components/UserDashboard.vue")

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/home",
        component: HomePage,
    },
    {
        path: "/login",
        component: LoginForm,
    },
    {
        path: "/register",
        component: RegisterForm,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: ProfileDetails,
    },
    {
        path: "/admin",
        name: "admin",
        // lazy-loaded
        component: AdminPanel,
    },
    {
        path: "/user",
        name: "user",
        // lazy-loaded
        component: UserDashboard,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;