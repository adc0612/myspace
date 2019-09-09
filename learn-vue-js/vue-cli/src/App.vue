<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <!-- 하위레벨 vue에서 emit을 하면 그 emit된 function은 하위 컴포넌트를 binding하고 있는 태그에 온다 -->
    <!-- 그것을 v-on:"하위컴포넌트 Function"을 통해 받는다. 
    이 하위 컴포넌트에서 emit을 하면 실행할 function을 methods안에 function을 선언한다.
     -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  data: function() {
    return  {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function(){
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>