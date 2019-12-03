import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateComponent from '@/components/CreateComponent.vue';
import IndexComponent from '@/components/IndexComponent.vue';
import EditComponent from '@/components/EditComponent.vue';

Vue.use(VueRouter)

const routes = [
  {
      name: 'create',
      path: '/create',
      component: CreateComponent
  },
  {
      name: 'posts',
      path: '/',
      component: IndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
