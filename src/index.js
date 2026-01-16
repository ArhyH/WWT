import './js/modules/header';
import './js/modules/sidebar';
import { renderNavItems, items } from './js/modules/todo-lists';
import './styles/style.global.scss';

import { page } from './js/common/elements';
import { checkPage } from './js/common/helpers';
import { initTodoList } from './js/modules/init-todo';

if (checkPage(page, 'lists')) {
  renderNavItems(items);
}

if (checkPage(page, 'list')) {
  initTodoList();
}
