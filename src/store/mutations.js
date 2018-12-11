export default {
    test_mutations(state){
        state.test.msg += 'x'
    },
    change_title(state, data){
        state.common.title = data.title;
    },
    //计算器
    //改变算式
    ['CLICK_CALC_BTN'](state, key){
        if(state['re']){
            state.calc.formula = '';
            state['re'] = false;
        }

        switch (key){
            case '←':

                break;
        }

        state.calc.key = key
    },
    ['CHANGE_FORMULA'](state){
        state.calc.formula += state.calc.key
    },
    ['GET_RESULT'](state){
        state['re'] = true;
        state.calc.result = eval(state.calc.formula);
    }

}