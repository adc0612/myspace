<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  methods:{
    ...mapMutations({
      clearTodo: 'clearAllItems'
    }),
    //vuex mutations 전 코드
    // clearTodo(){
    //   // this.$emit('clearAll');
    //   this.$store.commit('clearAllItems');
    // }
  }
}
</script>

<style scoped>
.clearAllContainer{
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn{
  color: #e20303;
  display: block;
}

</style>