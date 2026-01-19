import { VISYALLY_HIDDEN } from '../consts/consts';

const toggleElementVisibility = (element) => {
  element.classList.toggle(VISYALLY_HIDDEN);
};

const checkKeyPress = (e, keyCode) => e.which === keyCode;

const getElementFromTemplate = (selector, className = null) =>
  document
    .querySelector(`#${selector}`)
    .content.querySelector(`.${className ? className : selector}`)
    .cloneNode(true);

const getElementFromTemplateById = (selector, id = null) =>
  document
    .querySelector(`#${selector}`)
    .content.querySelector(`#${id ? id : selector}`)
    .cloneNode(true);

export {
  toggleElementVisibility,
  checkKeyPress,
  getElementFromTemplate,
  getElementFromTemplateById,
};
