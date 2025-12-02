import { App } from './App';
import './js/modules/header';
import './js/modules/sidebar';
import './js/modules/todo-lists';
import './styles/style.global.scss';

const root = document.querySelector('#root');
const app = App();
root.append(app);
