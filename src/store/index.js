import Vue from 'vue'
import vuex from 'vuex'

import test from './modules/test'
import common from './modules/common'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(vuex)

export default new vuex.Store({// store对象
    modules: {
        test: test,
        common: common
    },
    mutations: mutations,
    actions: actions,
    getters: getters
})
