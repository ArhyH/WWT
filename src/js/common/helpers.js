import { VISYALLY_HIDDEN } from '../consts/consts';

const toggleElementVisibility = (element) => {
  element.classList.toggle(VISYALLY_HIDDEN);
};

const checkPage = (page, expectedPage) => {
  return page.dataset.page === expectedPage;
};

const checkKeyPress = (e, keyCode) => e.which === keyCode;

const getElementFromTemplate = (selector) =>
  document
    .querySelector(`#${selector}`)
    .content.querySelector(`.${selector}`)
    .cloneNode(true);

export {
  toggleElementVisibility,
  checkPage,
  checkKeyPress,
  getElementFromTemplate,
};
