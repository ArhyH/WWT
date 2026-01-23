import { createModal } from '../../common/modal';
import { onFormSubmit, populateForm } from './create-todo-form';

const modalNode = document.querySelector('.create-todo-item-modal');
const closeNode = document.querySelector('#modal-close-todo');
const backdropNode = document.querySelector('.modal-backdrop');
const formNode = document.querySelector('#create-todo-item');

const modal = createModal(modalNode, backdropNode, closeNode);

let currentTodo = null;

const callbacks = {
  onUpdate: null,
  onCreate: null,
};

const setCallbacks = (onUpdate, onCreate) => {
  callbacks.onUpdate = onUpdate;
  callbacks.onCreate = onCreate;
};

const openModal = () => modal.open();

const onTodoUpdate = (todo) => {
  currentTodo = todo;
  populateForm(formNode, currentTodo);
  openModal();
};

const handleFormSubmit = (todosData) => {
  if (currentTodo) {
    callbacks.onUpdate?.(currentTodo, todosData);
  } else {
    callbacks.onCreate?.(todosData);
  }
  currentTodo = null;
};

modal.setOnClose(() => {
  formNode.reset();
});

modal.addHandler(formNode, 'submit', (evt) =>
  onFormSubmit(evt, (todosData) => {
    handleFormSubmit(todosData);
    modal.close();
  })
);

export { onTodoUpdate, setCallbacks, openModal };
