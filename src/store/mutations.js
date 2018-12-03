export default {
    test_mutations(state){
        state.test.msg += 'x'
    },
    change_title(state, data){
        state.common.title = data.title;
    }
}