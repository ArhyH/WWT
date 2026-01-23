import { TodoLists } from '../constructors/todo-lists';
import { getData, saveData } from '../local-storage';
import {
  createTodoList,
  renderTodoListItem,
  updateTodoList,
} from './todo-list-actions';
import { openModal, setCallbacks } from './todo-list-modal';
import { renderTodoLists } from './todo-list-render';
import { setCallbacks as setCallbacksContent } from '../content-manager';

const todoListsNode = document.querySelectorAll('.todo-lists');
const addListNode = document.querySelector('#add-new-list');
const modalTrigger = document.querySelector('#modal-trigger');

const todoLists = new TodoLists();
const savedData = getData();
console.log('Saved Data:', savedData);

const onContentChange = (contentName) => {
  if (contentName === 'lists') {
    modalTrigger.addEventListener('click', openModal);
    return;
  }

  modalTrigger.removeEventListener('click', openModal);
};

const initTodoLists = () => {
  setCallbacksContent('todo-list', onContentChange);

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
  [...todoListsNode].forEach((list) => {
    list.addEventListener('click', (evt) => setActiveListId(evt, todoLists));
  });
};

const setActiveListId = (evt) => {
  evt.preventDefault();

  const listItem = evt.target.closest('.todo-lists__item');
  if (!listItem) return;

  todoLists.setActiveListId(listItem.dataset.id);
  saveData(todoLists);
};

export { initTodoLists, todoLists };
