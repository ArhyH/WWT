import { TodoLists } from '../constructors/todo-lists';
import { getData, saveData } from '../local-storage';
import {
  createTodoList,
  renderTodoListItem,
  updateTodoList,
} from './todo-list-actions';
import { openModal, setCallbacks } from './todo-list-modal';
import { renderTodoLists } from './todo-list-render';

const todoListsNode = document.querySelector('.todo-lists');
const addListNode = document.querySelector('#add-new-list');
const modalTrigger = document.querySelector('#modal-trigger');

const todoLists = new TodoLists();
const savedData = getData();
console.log(todoLists);
console.log('Saved Data:', savedData);

const initTodoLists = () => {
  if (savedData) {
    todoLists.lists = savedData.lists;
    todoLists.activeListId = savedData.activeListId;
    renderTodoLists(todoLists, renderTodoListItem);
  }

  setCallbacks(
    (list, data) => {
      updateTodoList(list, data);
      renderTodoLists(todoLists, renderTodoListItem);
      saveData(todoLists);
    },
    (data) => {
      createTodoList(data, todoLists);
      renderTodoLists(todoLists, renderTodoListItem);
      saveData(todoLists);
    }
  );

  addListNode.addEventListener('click', openModal);
  todoListsNode.addEventListener('click', setActiveListId);
};

const setActiveListId = (evt) => {
  evt.preventDefault();

  const listItem = evt.target.closest('.todo-lists__item');
  if (!listItem) return;

  todoLists.setActiveListId(listItem.dataset.id);
  saveData(todoLists);
  console.log('Active List ID set:', todoLists.activeListId);

  const link = listItem.querySelector('.todo-lists__link');
  if (link) {
    window.location.href = link.href;
  }
};

const initAdditionalTrigger = () => {
  firstStepTrigger.addEventListener('click', openModal);
};

export { initTodoLists, initAdditionalTrigger, todoLists };
