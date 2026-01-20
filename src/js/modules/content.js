import { toggleContent } from './content-manager';

const listsButtonNode = document.querySelector('#nav-button-lists');
const tagsButtonNode = document.querySelector('#nav-button-tags');

const firstStepNode = document.querySelector('#first-step');
const listsNode = document.querySelectorAll('.todo-lists');

const onFirstStepNavClick = (evt) => {
  const button = evt.target.closest('.button');

  if (!button) {
    return;
  }

  if (evt.target.closest('#nav-button-lists')) {
    toggleContent('lists');
  }

  if (evt.target.closest('#nav-button-tags')) {
    toggleContent('tags');
  }
};

const onListsClick = (evt, todoLists) => {
  const listItem = evt.target.closest('.todo-lists__item');
  console.log(evt.target);

  if (!listItem) {
    return;
  }

  const currentList = todoLists.getById(todoLists.activeListId);

  console.log('currentList', currentList);
  console.log('currentTodos', currentList.todos);

  toggleContent('todo-list');
};

const initPageContent = (todoLists) => {
  firstStepNode.addEventListener('click', onFirstStepNavClick);
  [...listsNode].forEach((list) => {
    list.addEventListener('click', (evt) => onListsClick(evt, todoLists));
  });
};

export { initPageContent };
