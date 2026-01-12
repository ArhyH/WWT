import { VISYALLY_HIDDEN } from '../consts/consts';

const toggleElementVisibility = (element) => {
  element.classList.toggle(VISYALLY_HIDDEN);
};

const checkPage = (page, expectedPage) => {
  return page.dataset.page === expectedPage;
};

const checkKeyPress = (e, keyCode) => e.which === keyCode;

export { toggleElementVisibility, checkPage, checkKeyPress };
