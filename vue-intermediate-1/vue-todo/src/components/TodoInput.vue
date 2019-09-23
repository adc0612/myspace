<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newToDoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        무언가를 입력하십시오.
      </div>
    </Modal>
  </div>
</template>

<script>
  import Modal from './common/modal.vue'
  export default {
    data () {
      return {
        newToDoItem: "",
        showModal: false
      }
    },
    methods: {
      addTodo () {
        if (this.newToDoItem !== '') {
          // this.$emit('addTodoItem', this.newToDoItem);
          let text = this.newToDoItem.trim();
          this.$store.commit('addOneItem',text);
          this.clearInput();
        }else{
          this.showModal = !this.showModal;
        }
      },
      clearInput () {
        this.newToDoItem = '';
      }
    },
    components: {
      Modal
    }
  }

</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: #fff;
    vertical-align: middle;
  }

  .closeModalBtn{
    color: #43b983;
  }

</style>
