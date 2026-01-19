import { getElementFromTemplate } from '../../common/helpers';
import { TodoList } from '../constructors/todo-list';

const createTodoList = (data, todoLists) => {
  const list = new TodoList(data);
  todoLists.add(list);
};

const updateTodoList = (list, data) => {
  list.update(data);
};

const renderTodoListItem = (data, parent) => {
  let newList;
  if (parent === 'sidebar') {
    newList = getElementFromTemplate('todo-list-sidebar', 'todo-lists__item');
  } else {
    newList = getElementFromTemplate('todo-list-page', 'todo-lists__item');
  }

  newList.querySelector('.button__text').textContent = data.title;
  newList.dataset.id = data.id;

  return newList;
};

export { createTodoList, updateTodoList, renderTodoListItem };
