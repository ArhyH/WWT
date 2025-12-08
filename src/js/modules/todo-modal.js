import { ESC_KEYCODE, HIDDEN } from '../consts/consts';
import { page } from '../helpers/elements';
import { checkKeyPress, checkPage } from '../helpers/helpers';

const modal = document.querySelector('.todo-modal');
const modalTrigger = document.querySelector('#modal-trigger');
const modalClose = document.querySelector('#modal-close');
const backdrop = document.querySelector('.modal-backdrop');
const firstStepTrigger = document.querySelector('#add-first-todo-item');

let onClickOutside = null;
let onEscKeydown = null;
let onCloseClick = null;

const getEscHandler = (func) => (e) => {
  if (checkKeyPress(e, ESC_KEYCODE)) {
    e.preventDefault();
    func();
  }
};

const getClickOutsideHandler = (func) => (e) => {
  if (e.target === backdrop) {
    func();
  }
};

const addEventListeners = () => {
  if (onClickOutside) {
    backdrop.addEventListener('click', onClickOutside);
  }

  if (onEscKeydown) {
    document.addEventListener('keydown', onEscKeydown);
  }

  if (onCloseClick) {
    modalClose.addEventListener('click', onCloseClick);
  }
};

const removeEventListeners = () => {
  if (onClickOutside) {
    backdrop.removeEventListener('click', onClickOutside);
    onClickOutside = null;
  }

  if (onEscKeydown) {
    document.removeEventListener('keydown', onEscKeydown);
    onEscKeydown = null;
  }

  if (onCloseClick) {
    modalClose.removeEventListener('click', onCloseClick);
    onCloseClick = null;
  }
};

const closeModal = () => {
  modal.classList.add(HIDDEN);
  backdrop.classList.add(HIDDEN);
  removeEventListeners();
};

const openModal = () => {
  modal.classList.remove(HIDDEN);
  backdrop.classList.remove(HIDDEN);

  onClickOutside = getClickOutsideHandler(closeModal);
  onEscKeydown = getEscHandler(closeModal);
  onCloseClick = closeModal;

  addEventListeners();
};

if (checkPage(page, 'list') || checkPage(page, 'lists')) {
  modalTrigger.addEventListener('click', openModal);
}

if (checkPage(page, 'list')) {
  firstStepTrigger.addEventListener('click', openModal);
}
