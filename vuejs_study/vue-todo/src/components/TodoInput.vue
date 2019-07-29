<template lang="html">
  <div class="inputBox shadow">
    <input type="text" name="" value="" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addToDo">
    <span class="addContainer" v-on:click="addToDo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addToDo() {
      if (this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim();
        localStorage.setItem(value, value);
        console.log(value);
        this.clearInput();
        alert('saved');
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style lang="css" scoped>
  input:focus{
    outline: none;
  }
  .inputBox{
    background: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input{
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn{
    color: #fff;
    vertical-align: middle;
  }
</style>
