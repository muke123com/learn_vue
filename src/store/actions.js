export default {
    test_actions(store){
        console.log("actions");
        store.commit("test_mutations");
        store.commit("test_mutations");
    },

    click_calc_btn(store, key){
        if(key == '=') {
            store.commit("GET_RESULT");
            return;
        };
        store.commit("CLICK_CALC_BTN", key);
        store.commit("CHANGE_FORMULA");
    }
}