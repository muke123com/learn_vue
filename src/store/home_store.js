export default {
  state: {
    name: 'home',
    show: false
  },
  mutations: {
    switch_state (state) {
      state.show = !state.show
    }
  }
}
