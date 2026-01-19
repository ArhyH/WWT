import './js/modules/header';
import './js/modules/sidebar';
import './styles/style.global.scss';

import { initTodoList } from './js/modules/todo-list/init-todo';
import {
  initAdditionalTrigger,
  initTodoLists,
  todoLists,
} from './js/modules/todo-lists/init-todo-list';

initTodoLists();

initAdditionalTrigger();

initTodoList(todoLists);
