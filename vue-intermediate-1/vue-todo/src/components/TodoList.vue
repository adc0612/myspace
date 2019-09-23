<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem,index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{checkBtnCompleted:todoItem.completed}"
          v-on:click="toggleComplete({todoItem,index})"
        ></i>
        <span v-bind:class="{textCompleted:todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem,index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  methods: {
    ...mapMutations({
      //mutation 적용 후 전달되는인자가 하나여야하고 하나이면 인자를 안 써줘도 자동으로 입력된다.
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    }),
    //vuex mutaions 전 코드
    // removeTodo(todoItem, index) {
    //   // this.$emit("removeTodoItem", todoItem, index);
    //   // {todoItem,index} 이렇게 쓰면 객체에 담아서 보낼수 있다.
    //   this.$store.commit('removeOneItem',{todoItem,index});
    // },
    // toggleComplete(todoItem, index) {
    //   // this.$emit("toggleTodoItem", todoItem, index);
    //   this.$store.commit('toggleOneItem',{todoItem,index});
    // }
  },
  computed: {
    ...mapGetters(['storedTodoItems'])
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: #fff;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

/* list item transition effect */

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>