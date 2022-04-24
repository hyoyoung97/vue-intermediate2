<template>
  <div>
    <!-- tag 로 인해 'transition-group' -> 'ul' 로 변경됨 -->
    <!-- name 으로 트랜지션css 등록함 -->
    <transition-group name="list" tag="ul">
      <!--:key="todoItem" -> vscode에서는 추가를 권함-->
      <li v-for="(todoItem, index) in this.$store.state.todoItems" :key="todoItem.item" class="shadow">
        <i class="checkBtn fa-solid fa-check" :class="{checkBtnCompleted: todoItem.completed}"
           @click="toggleComplete(todoItem, index)"></i>
        <!--속성값으로 접근-->
        <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodo(todoItem, index) {
      // this.$emit('removeItem', todoItem, index);
      this.$store.commit('removeOneItem', {todoItem, index});
      },
    toggleComplete(todoItem, index) {
      // this.$emit('toggleItem', todoItem, index);
      this.$store.commit('toggleOneItem', {todoItem, index});
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
/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  /* 1s -> 1초 */
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  /* translateY(30px) -> Y축으로 30px 이동  */
  transform: translateY(30px);
}
</style>
