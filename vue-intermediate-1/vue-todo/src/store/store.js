import Vue from 'vue'
import Vuex from 'vuex'
//* 별표를 쓰면 해당파일에 있는 모든 내용을 가져온다는 뜻이다.
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'

Vue.use(Vuex);
// export const store = new Vuex.Store({
//     state: {
//         todoItems: storage.fetch()
//     },
//     getters,
//     mutations

// }); 
export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});