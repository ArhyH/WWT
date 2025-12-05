import { HIDDEN } from '../consts/consts';
import { page } from '../helpers/elements';
import { checkPage } from '../helpers/helpers';

const modal = document.querySelector('.todo-modal');
const modalTrigger = document.querySelector('#modal-trigger');
const modalClose = document.querySelector('#modal-close');

const closeModal = () => {
  modal.classList.add(HIDDEN);
  modalClose.removeEventListener('click', closeModal);
};

const openModal = () => {
  modal.classList.remove(HIDDEN);
  modal.closest.addEventListener('clicl', closeModal);
};

if (checkPage(page, 'list') || checkPage(page, 'lists')) {
  modalTrigger.addEventListener('click', openModal);
} else {
  modalTrigger.removeEventListener('click', openModal);
}

if (checkPage(page, 'lists')) {
}
