export default {
    state: {
        name: 'vuex',
        count: 0
    },
    mutations: {
        add_count (state) {
            state.count++
        }
    }
}