import { createModal } from '../common/modal';
import { page } from '../common/elements';
import { checkPage } from '../common/helpers';

const modalNode = document.querySelector('.todo-modal');
const modalTrigger = document.querySelector('#modal-trigger');
const closeNode = document.querySelector('#modal-close');
const backdropNode = document.querySelector('.modal-backdrop');
const firstStepTrigger = document.querySelector('#add-first-todo-item');

const modal = createModal(modalNode, backdropNode, closeNode);

const openModal = modal.open;

if (checkPage(page, 'list') || checkPage(page, 'lists')) {
  modalTrigger.addEventListener('click', openModal);
}

if (checkPage(page, 'list')) {
  firstStepTrigger.addEventListener('click', openModal);
}
