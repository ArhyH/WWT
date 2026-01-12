import { ESC_KEYCODE } from '../consts/consts';
import { checkKeyPress } from './helpers';

const stack = [];

const onKeyDown = (evt) => {
  if (!checkKeyPress(evt, ESC_KEYCODE)) {
    return;
  }

  if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
    return;
  }

  const handler = stack.at(-1);

  if (!handler?.onEscKeydown) {
    return;
  }

  evt.preventDefault();
  handler.onEscKeydown();
};

const onPointerDown = (evt) => {
  const handler = stack.at(-1);

  if (!handler) {
    return;
  }

  if (evt.target !== handler.overlay) {
    return;
  }

  if (handler.content && handler.content.contains(evt.target)) {
    return;
  }

  handler.onClickOutside();
};

document.addEventListener('keydown', onKeyDown);
document.addEventListener('mousedown', onPointerDown);

const registerHandler = (handler) => {
  stack.push(handler);
};

const unregisterHandler = (handler) => {
  const index = stack.lastIndexOf(handler);

  if (index !== -1) {
    stack.splice(index, 1);
  }
};

export { registerHandler, unregisterHandler };
