import { setCallbacks } from '../content-manager';
import { updateView } from './header';
import { HeaderMode, setMode, subscribe } from './store';

const importButtonNode = document.querySelector('#import-button');

const onContentChange = (contentName) => {
  if (contentName === 'todo-list') {
    setMode(HeaderMode.SETTINGS);
    return;
  }

  setMode(HeaderMode.IMPORT);
};

const importTodos = () => {
  console.log('Import');
};

const initHeader = () => {
  subscribe((snapshot) => updateView(snapshot));
  setCallbacks('header', onContentChange);

  importButtonNode.addEventListener('click', importTodos);
};

export { initHeader };
