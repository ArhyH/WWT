import { VISYALLY_HIDDEN } from '../consts/consts';
import { setCallbacks } from './content-manager';

const floatElementNode = document.querySelector('.float-element');

const onContentChange = (contentName) => {
  if (contentName === 'todo-list' || contentName === 'lists') {
    floatElementNode.classList.remove(VISYALLY_HIDDEN);
    return;
  }

  floatElementNode.classList.add(VISYALLY_HIDDEN);
};

const initFloatElement = () => {
  setCallbacks('float', onContentChange);
};

export { initFloatElement };
