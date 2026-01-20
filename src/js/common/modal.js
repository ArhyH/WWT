import { HIDDEN } from '../consts/consts';
import { getElementFromTemplateById } from './helpers';
import { registerHandler, unregisterHandler } from './overlay-manager';

let handlerIdCounter = 0;

function createModal(modalNode, backdropNode, closeNode) {
  const body = document.body;
  const handlers = new Map();

  const overlayConfig = {
    overlay: backdropNode,
    content: modalNode,
    onEscKeydown: close,
    onClickOutside: close,
  };

  const callbacks = {
    onOpen: null,
    onClose: null,
  };

  function close() {
    unregisterHandler(overlayConfig);
    closeNode.removeEventListener('click', close);

    handlers.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });

    modalNode.classList.add('is-hidden');
    backdropNode.classList.add('is-hidden');
    body.classList.remove('modal-open');
    callbacks.onClose?.();
  }

  function open() {
    registerHandler(overlayConfig);
    closeNode.addEventListener('click', close);

    handlers.forEach(({ element, event, handler }) => {
      element.addEventListener(event, handler);
    });

    modalNode.classList.remove(HIDDEN);
    backdropNode.classList.remove(HIDDEN);
    body.classList.add('modal-open');
    callbacks.onOpen?.();
  }

  function setOnOpen(callback) {
    callbacks.onOpen = callback;
  }

  function setOnClose(callback) {
    callbacks.onClose = callback;
  }

  const addHandler = (element, event, handler) => {
    if (!element._handlerId) {
      element._handlerId = ++handlerIdCounter;
    }

    const key = `${event}-${element._handlerId}`;

    if (!handlers.has(key)) {
      handlers.set(key, { element, event, handler });
    }
  };

  const createContent = (title, template) => {
    modalNode.querySelector('.todo-modal__title').textContent = title;
    const content = getElementFromTemplateById(template);
    modalNode.querySelector('.create-todo').append(content);
  };

  return {
    open,
    close,
    setOnOpen,
    setOnClose,
    addHandler,
    createContent,
  };
}

export { createModal };
