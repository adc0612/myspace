import Vue from 'vue'
import App from './App.vue'
//store를 여기서 import하면 store.js에서 선언안 store변수를 사용가능
import {store} from './store/store'

new Vue({
  el: '#app',
  //store 등록
  store,
  render: h => h(App)
})
