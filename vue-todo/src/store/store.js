import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      var obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      // App.vue 의 상위 todoItems 데이터와 연결
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item); // item 이 key 값임.
      state.todoItems.splice(payload.index, 1);  //splice -> (특정인덱스, 개수)특정인텍스에서 개수만큼 지울 수 있음
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item); // 자동업데이트 api가 없기 때문에 지워주고 다시 세팅해준다.
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem)); // 바뀐 completed로 저장
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});
