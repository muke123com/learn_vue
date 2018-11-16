import Vue from 'vue'
import vuex from 'vuex'

import home_store from './home_store'
import vuex_store from './vuex_store'

Vue.use(vuex)

export default new vuex.Store({// store对象
  modules: {
    home: home_store,
    vuex: vuex_store
  }
})
