import { getElementFromTemplate } from '../common/helpers';
import { TodoItem } from './todo-item';

const createTodo = (data, todoList) => {
  const todo = new TodoItem(data);
  todoList.add(todo);
};

const updateTodo = (todo, data) => {
  todo.onEdit(data);
};

const renderTodoItem = (data) => {
  const newTodo = getElementFromTemplate('todo-item');

  newTodo.querySelector('.todo-item__title').textContent = data.title;
  newTodo.querySelector('.todo-item__description').textContent =
    data.description;
  newTodo.querySelector('.todo-item__priority').textContent = data.priority;
  newTodo.querySelector('.todo-item__assignee').textContent = data.assignee;
  newTodo.dataset.id = data.id;

  return newTodo;
};

export { createTodo, updateTodo, renderTodoItem };
