import { createModal } from '../../common/modal';
import { onFormSubmit, populateForm } from './create-todo-list-form';

const modalNode = document.querySelector('.create-todo-list-modal');
const closeNode = document.querySelector('#modal-close-list');
const backadropNode = document.querySelector('.modal-backdrop');
const formNode = document.querySelector('#create-todo-list');

const modal = createModal(modalNode, backadropNode, closeNode);

let currentList = null;

const callbacks = {
  onUpdate: null,
  onCreate: null,
};

const setCallbacks = (onUpdate, onCreate) => {
  callbacks.onUpdate = onUpdate;
  callbacks.onCreate = onCreate;
};

const openModal = modal.open;

const onTodoListUpdate = (list) => {
  currentList = list;
  populateForm(formNode, currentList);
  openModal();
};

const handleFormSubmit = (data) => {
  if (currentList) {
    callbacks.onUpdate?.(currentList, data);
  } else {
    callbacks.onCreate?.(data);
  }
};

modal.setOnClose(() => {
  formNode.reset();
});

modal.addHandler(formNode, 'submit', (evt) => {
  onFormSubmit(evt, (data) => {
    handleFormSubmit(data);
    modal.close();
  });
});

export { onTodoListUpdate, setCallbacks, openModal };
