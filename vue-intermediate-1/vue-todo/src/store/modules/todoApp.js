const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== '') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
};

const state = {
  todoItems: storage.fetch()
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
};

const mutations = {
  addOneItem(state, todoItem) {
    const obj = {
      completed: false,
      item: todoItem
    };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    // this.todoItems.push(obj);
    state.todoItems.push(obj);
  },
  //객체롤 넘기면 payload 선언해서 접근 해야한다.
  removeOneItem(state, ) {
    console.log(payload.index);
    // 여기서 todoItem이 todoItems배열에 키이므로 그걸 사용해 지운다.
    localStorage.removeItem(payload.todoItem.item);
    //splice를 slice대신 쓰는 이유는 slice는 그냥 삭제만 하지만 splice는 삭제하고 새 배열을 다시 로드 해준다.
    // localstorage에서 삭제 했으면 todoItems에서도 삭제해줘야 한다.
    //key를 가지고 있는 index와 1을 넣어준다. 1은 하나만 지우라는 뜻이다.
    state.todoItems.splice(payload.index, 1);
  },

  toggleOneItem(state, ) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    // todoItem.completed = !todoItem.completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    console.log(payload.todoItem.completed);
  },

  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  }
};

export default{
  state,
  getters,
  mutations
};
