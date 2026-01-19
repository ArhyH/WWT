import { VISYALLY_HIDDEN } from '../../consts/consts';
import { onTodoUpdate } from './todo-modal';

const firstStepNode = document.querySelector('#add-first-todo-item');
const todoListNode = document.querySelector('.todo-list');

const checkTodoList = (todoList) => {
  if (todoList.todos.length > 0) {
    firstStepNode.classList.add(VISYALLY_HIDDEN);
    todoListNode.classList.remove(VISYALLY_HIDDEN);
    return;
  }
  firstStepNode.classList.remove(VISYALLY_HIDDEN);
  todoListNode.classList.add(VISYALLY_HIDDEN);
};

const renderTodoList = (todoList, renderTodoItem) => {
  todoListNode.innerHTML = '';
  const fragment = document.createDocumentFragment();

  todoList.todos.forEach((element) => {
    fragment.append(renderTodoItem(element));
  });

  todoListNode.append(fragment);
  checkTodoList(todoList);
};

const onTodoListClick = (evt, todoList) => {
  const todoItem = evt.target.closest('.todo-item');

  if (!todoItem) {
    return;
  }

  const todoId = todoItem.dataset.id;
  const todo = todoList.getById(todoId);

  if (evt.target.closest('#delete-todo')) {
    todoList.delete(todoId);
    renderTodoList(todoList);
    return;
  }

  if (evt.target.closest('#update-todo')) {
    onTodoUpdate(todo);
    return;
  }
};

const onTodoListChange = (evt, todoList) => {
  if (!evt.target.matches('.checkbox')) {
    return;
  }

  const todoItem = evt.target.closest('.todo-item');
  const todoId = todoItem.dataset.id;
  const todo = todoList.getById(todoId);

  todo.toggle();
  renderTodoList(todoList);
};

export { onTodoListClick, onTodoListChange, renderTodoList };
