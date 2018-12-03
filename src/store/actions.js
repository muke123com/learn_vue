export default {
    test_actions(store){
        console.log("actions");
        store.commit("test_mutations")
        store.commit("test_mutations")
    }
}