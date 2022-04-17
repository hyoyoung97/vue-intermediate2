<template>
  <div id="app">
    <todo-header></todo-header>
    <!--addTodo - 3 (addTodoItem => addOneItem)-->
    <todo-input @addTodoItem ="addOneItem"></todo-input>
    <todo-list :propsdata="todoItems"></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";


export default {
  data: function () {
    return{
      todoItems: []
    }
  },
  methods: {
    // addTodo - 4 (하위에서 $emit 으로 올려보낸 newTodoItem 를 받음)
    addOneItem: function (newTodoItem) {
      var obj = {completed: false, item: newTodoItem};
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      // App.vue 의 상위 todoItems 데이터와 연결
      this.todoItems.push(obj);
    }
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
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
