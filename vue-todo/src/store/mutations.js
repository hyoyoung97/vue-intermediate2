const addOneItem = (state, todoItem) => {
  var obj = {completed: false, item: todoItem};
  localStorage.setItem(todoItem, JSON.stringify(obj));
  // App.vue 의 상위 todoItems 데이터와 연결
  state.todoItems.push(obj);
}
const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item); // item 이 key 값임.
  state.todoItems.splice(payload.index, 1);  //splice -> (특정인덱스, 개수)특정인텍스에서 개수만큼 지울 수 있음
}
const toggleOneItem = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  localStorage.removeItem(payload.todoItem.item); // 자동업데이트 api가 없기 때문에 지워주고 다시 세팅해준다.
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem)); // 바뀐 completed로 저장
}
const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }
