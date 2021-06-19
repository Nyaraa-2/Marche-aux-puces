import Vue from 'vue'
import VueRouter from 'vue-router'
import accueil from '../Pages/accueil.vue'
import inscription from '../Pages/inscription.vue'
import validation from '../Pages/validation.vue'
import erreur from '../Pages/Erreur.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: accueil
  },
  {
    path: '/inscription/:id',
    name: 'Inscription',
    component: inscription
  },
  {
    path : '/validation/:id',
    name : 'Validation',
    component : validation
  },
  {
    path : '/erreur/:origin',
    name : 'Erreur',
    component : erreur
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
