import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import GamePage from "@/views/GamePage.vue";
import Help from "@/views/Help.vue";
import Level from "@/views/ChooseLevel.vue";
Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/game",
      name: "game",
      component: GamePage
    },
    {
      path: "/help",
      name: "help",
      component: Help
    },
    {
      path: "/level",
      name: "level",
      component: Level
    },
    {
      path: "*",
      component: Home
    }
  ]
});
