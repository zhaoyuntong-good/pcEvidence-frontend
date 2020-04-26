import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from '@/assets/js/router/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
