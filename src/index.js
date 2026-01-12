import { App } from './App';
import './js/modules/header';
import './js/modules/sidebar';
import { renderNavItems, items } from './js/modules/todo-lists';
import './js/modules/todo-modal';
import './styles/style.global.scss';

import { page } from './js/common/elements';
import { checkPage } from './js/common/helpers';

// const root = document.querySelector('#root');
// const app = App();
// root.append(app);

if (checkPage(page, 'lists')) {
  renderNavItems(items);
}
