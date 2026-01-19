function TodoList({ title }) {
  this.todos = [];
  this.title = title;
  this.id = (Date.now() + Math.random()).toString();
  console.log(this.todos);
}

TodoList.prototype.add = function (todo) {
  this.todos.push(todo);
};

TodoList.prototype.delete = function (id) {
  this.todos = this.todos.filter((todo) => todo.id !== id);
};

TodoList.prototype.getById = function (id) {
  return this.todos.find((todo) => todo.id === id);
};

// TodoList.prototype.updateTodo = function (id, newTodo) {
//   this.todos = this.todos.map((todo) => (todo.id === id ? newTodo : todo));
// };

TodoList.prototype.update = function (data) {
  Object.assign(this, data);
};

export { TodoList };
