<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:propsdata="todoItems" v-on:removeTodoItem="removeOneItem" v-on:toggleTodoItem="toggleOneItem"></TodoList> -->
    <TodoList></TodoList>
    <!-- <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter> -->
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
  // data(){
  //   return{
  //     todoItems: []
  //   }
  // },
  // methods: {
  //   addOneItem (todoItem) {
  //      const obj ={completed:false, item: todoItem};
  //     localStorage.setItem(todoItem, JSON.stringify(obj));
  //     this.todoItems.push(obj);
  //   },
  //   removeOneItem(todoItem,index){
  //     console.log(todoItem,index);
  //     console.log(todoItem.item);
  //     // 여기서 todoItem이 todoItems배열에 키이므로 그걸 사용해 지운다.
  //     localStorage.removeItem(todoItem.item);
  //     //splice를 slice대신 쓰는 이유는 slice는 그냥 삭제만 하지만 splice는 삭제하고 새 배열을 다시 로드 해준다.
  //     // localstorage에서 삭제 했으면 todoItems에서도 삭제해줘야 한다.
  //     //key를 가지고 있는 index와 1을 넣어준다. 1은 하나만 지우라는 뜻이다.
  //     this.todoItems.splice(index,1);
  //   },
  //   toggleOneItem(todoItem,index){
  //     this.todoItems[index].completed = !this.todoItems[index].completed 
  //     // todoItem.completed = !todoItem.completed;
  //     localStorage.removeItem(todoItem.item);
  //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  //     console.log(todoItem.completed);
  //   },
  //   clearAllItems(){
  //     localStorage.clear();
  //     this.todoItems = [];
  //   }
  // },
  components: {
      //ES6에서 components선언과 들어오는 값이 같으면 하나로 써줄수 있다.
      // 'TodoHeader': TodoHeader, = TodoHeader
      // 'TodoInput': TodoInput, = TodoInput
      // 'TodoList': TodoList, = TodoList
      // 'TodoFooter': TodoFooter = TodoFooter
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
  }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #f6f6f6;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
