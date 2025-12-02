import { VISYALLY_HIDDEN } from '../consts/consts';

export const toggleElementVisibility = (element) => {
  element.classList.toggle(VISYALLY_HIDDEN);
};

export const checkPage = (page, expectedPage) => {
  return page.dataset.page === expectedPage;
};
