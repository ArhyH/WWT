import { createTodo, renderTodoItem, updateTodo } from './todo-item-actions';
import { openModal, setCallbacks } from './todo-modal';
import { setCallbacks as setCallbacksContent } from '../content-manager';
import {
  onTodoListChange,
  onTodoListClick,
  renderTodoList,
} from './todo-render';
import { getData, saveData } from '../local-storage';

const todoListNode = document.querySelector('.todo-list');
const modalTrigger = document.querySelector('#modal-trigger');
const firstStepTrigger = document.querySelector('#add-first-todo-item');
const savedData = getData();

const onContentChange = (contentName) => {
  if (contentName === 'todo-list') {
    modalTrigger.addEventListener('click', openModal);
    return;
  }

  modalTrigger.removeEventListener('click', openModal);
};

const initTodoList = (todoLists) => {
  setCallbacksContent('todo', onContentChange);
  const getActiveList = () => todoLists.getById(todoLists.activeListId);

  todoLists.onActiveListChange = () =>
    renderTodoList(getActiveList(), renderTodoItem);

  if (savedData) {
    todoLists.lists = savedData.lists;
    todoLists.activeListId = savedData.activeListId;
    const activeList = getActiveList();
    renderTodoList(activeList, renderTodoItem);
  }

  setCallbacks(
    (todo, data) => {
      const activeList = getActiveList();
      updateTodo(todo, data);
      renderTodoList(activeList, renderTodoItem);
      saveData(todoLists);
    },
    (data) => {
      const activeList = getActiveList();
      createTodo(data, activeList);
      renderTodoList(activeList, renderTodoItem);
      saveData(todoLists);
    }
  );

  todoListNode.addEventListener('click', (evt) =>
    onTodoListClick(evt, getActiveList())
  );
  todoListNode.addEventListener('change', (evt) =>
    onTodoListChange(evt, getActiveList())
  );
  firstStepTrigger.addEventListener('click', openModal);
};

export { initTodoList };
