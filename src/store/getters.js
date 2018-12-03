export default {
    test_arr(state) {
        return state.test.msg.split("").join("|")
    }
}