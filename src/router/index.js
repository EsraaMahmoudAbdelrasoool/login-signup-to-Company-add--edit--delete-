import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import signup from "../components/signup.vue";
import Add from "../components/Add.vue";
import Update from "../components/Update.vue";
import login from "../components/login.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
  {
    path: "/update/:id",
    name: "Update",
    component: Update,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
