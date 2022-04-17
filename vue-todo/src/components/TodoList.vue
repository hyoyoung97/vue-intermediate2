<template>
  <div>
    <ul>
      <!--:key="todoItem" -> vscode에서는 추가를 권함-->
      <li v-for="(todoItem, index) in propsdata" :key="todoItem.item" class="shadow">
        <i class="checkBtn fa-solid fa-check" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete(todoItem, index)"></i>
        <!--속성값으로 접근-->
        <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeTodo: function (todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);  //splice -> (특정인덱스, 개수)특정인텍스에서 개수만큼 지울 수 있음
    },
    toggleComplete: function (todoItem, index) {
      todoItem.completed = !todoItem.completed;
      // localStorage의 데이터를 갱신
      localStorage.removeItem(todoItem.item); // 자동업데이트 api가 없기 때문에 지워주고 다시 세팅해준다.
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem)); // 바뀐 completed로 저장
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
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
  background: white;
  border-radius: 5px;
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
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
