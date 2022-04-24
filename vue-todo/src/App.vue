<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";


export default {
  data() {
    return{
      // todoItems: []
    }
  },
  methods: {
    // addTodo - 4 (하위에서 $emit 으로 올려보낸 newTodoItem 를 받음)
    // addOneItem(newTodoItem) {
    //   var obj = {completed: false, item: newTodoItem};
    //   localStorage.setItem(newTodoItem, JSON.stringify(obj));
    //   // App.vue 의 상위 todoItems 데이터와 연결
    //   this.todoItems.push(obj);
    // },

    // removeTodo.4 (emit(removeItem) 의 param)
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item); // item 이 key 값임.
    //   this.todoItems.splice(index, 1);  //splice -> (특정인덱스, 개수)특정인텍스에서 개수만큼 지울 수 있음
    // },

    // toggleOneItem(todoItem, index) {
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item); // 자동업데이트 api가 없기 때문에 지워주고 다시 세팅해준다.
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem)); // 바뀐 completed로 저장
    // },

    // clearAllItems() {
    //   localStorage.clear();
    //   // 화면변경
    //   this.todoItems = [];
    // }
  },
  components: {
    'todo-header' : TodoHeader,
    'todo-input' : TodoInput,
    'todo-list' : TodoList,
    'todo-footer' : TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
