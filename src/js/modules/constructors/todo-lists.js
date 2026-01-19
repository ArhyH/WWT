function TodoLists() {
  this.lists = [];
  this.activeListId = null;
  this.onActiveListChange = null;
  console.log(this.lists);
}

TodoLists.prototype.add = function (list) {
  this.lists.push(list);
};

TodoLists.prototype.delete = function (id) {
  this.lists = this.lists.filter((list) => list.id !== id);
};

TodoLists.prototype.getById = function (id) {
  return this.lists.find((list) => list.id === id);
};

TodoLists.prototype.getActiveListId = function () {
  return this.activeListId;
};

TodoLists.prototype.setActiveListId = function (id) {
  this.activeListId = id;
  if (this.onActiveListChange) {
    this.onActiveListChange(this.getById(id));
  }
};

export { TodoLists };
