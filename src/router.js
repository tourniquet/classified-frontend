import Vue from 'vue'
import VRouter from 'vue-router'
import routes from './routes'

Vue.use(VRouter)

const router = new VRouter({
  hashbang: false,
  history: true
})

router.map(routes)

export default router
