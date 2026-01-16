import { createTodo, renderTodoItem, updateTodo } from './todo-item-actions';
import { TodoList } from './todo-list';
import { openModal, setCallbacks } from './todo-modal';
import {
  onTodoListChange,
  onTodoListClick,
  renderTodoList,
} from './todo-render';

const todoListNode = document.querySelector('.todo-list');
const modalTrigger = document.querySelector('#modal-trigger');
const firstStepTrigger = document.querySelector('#add-first-todo-item');
const todoList = new TodoList();

const initTodoList = () => {
  setCallbacks(
    (todo, data) => {
      updateTodo(todo, data);
      renderTodoList(todoList, renderTodoItem);
    },
    (data) => {
      createTodo(data, todoList);
      renderTodoList(todoList, renderTodoItem);
    }
  );

  todoListNode.addEventListener('click', (evt) =>
    onTodoListClick(evt, todoList)
  );
  todoListNode.addEventListener('change', (evt) =>
    onTodoListChange(evt, todoList)
  );
  modalTrigger.addEventListener('click', openModal);
  firstStepTrigger.addEventListener('click', openModal);
};

export { initTodoList };
