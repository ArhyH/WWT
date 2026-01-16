function TodoItem({ title, description, priority, assignee, date }) {
  this.id = Date.now() + Math.random();
  this.title = title;
  this.description = description;
  this.priority = priority;
  this.assignee = assignee;
  this.date = date;
  this.completed = false;
}

TodoItem.prototype.onEdit = function (data) {
  Object.assign(this, data);
};

TodoItem.prototype.onChange = function () {
  this.completed = !this.completed;
};

export { TodoItem };
