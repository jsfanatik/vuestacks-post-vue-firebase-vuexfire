import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '@/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: vuexfireMutations,

  actions: {
    loadPosts: firestoreAction(context => {
      return context.bindFirestoreRef('posts', db.collection('posts'))
    }),
  }
})
