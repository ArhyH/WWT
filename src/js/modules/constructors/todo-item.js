function TodoItem({ title, description, priority, assignee, date }) {
  this.id = (Date.now() + Math.random()).toString();
  this.title = title;
  this.description = description;
  this.priority = priority;
  this.assignee = assignee;
  this.date = date;
  this.completed = false;
}

TodoItem.prototype.update = function (data) {
  Object.assign(this, data);
};

TodoItem.prototype.toggle = function () {
  this.completed = !this.completed;
};

export { TodoItem };
