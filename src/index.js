import './styles/style.global.scss';

import { initTodoList } from './js/modules/todo-list/init-todo';
import {
  initTodoLists,
  todoLists,
} from './js/modules/todo-lists/init-todo-list';
import { initPageContent } from './js/modules/content';
import { shareContentState } from './js/modules/content-manager';
import { initSidebar } from './js/modules/sidebar/init-sidebar';
import { initHeader } from './js/modules/header/init-header';

shareContentState();

initHeader();

initSidebar();

initTodoLists();

initPageContent(todoLists);

initTodoList(todoLists);
