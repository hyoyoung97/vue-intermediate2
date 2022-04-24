<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!--<button @click="addTodo">add</button>-->
    <span class="addContainer" @click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <modal v-if="showModal" @close="showModal = false">
      <!--
    you can use custom content here to overwrite
    default content
  -->
      <h3 slot="header">custom header</h3>
    </modal>
  </div>
</template>

<script>
import modal from "./common/Modal";

export default {
  data: function () {
    return {
      newTodoItem: "",
      showModal:false
    }
  },
  methods: {
    // addTodo - 1
    addTodo: function () {
      if (this.newTodoItem !== '') {
        // addTodo - 2 (상위 App.vue 의 todo-input -> addTodoItem 을 작동시킴
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      }
    }
    ,
    clearInput: function () {
      this.newTodoItem = '';
    }
  },
  components: {
    modal: modal,
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
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
  color: white;
  vertical-align: middle;
}
</style>
