<template>
  <header>
      <!-- 밑에 propsdata를 {{propsdata}}를 쓰면 상위레벨에 있는 내려오는 데이터를 넣을 수 있다. -->
      <h1>{{propsdata}}</h1>
      <button v-on:click="sendEvent">add</button>
  </header>
</template>

<script>
export default {
  //props를 선언 하면 상위 레벨의 이거를 써줄 테그에 v-bind로 propsdata를 엮어주면
  //상위의 data를 밑으로 내려 쓸 수 있다.
  props: ['propsdata'],
  methods: {
    sendEvent: function(){
      this.$emit('renew')
    }
  }
}
</script>

<style>

</style>