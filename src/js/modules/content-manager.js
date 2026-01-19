import { HIDDEN } from '../consts/consts';

const contentNode = document.querySelector('.content');

const getContentName = (name) => contentNode.querySelector(`.${name}`);

let activeContent = getContentName('navigation');

const toggleContent = (content) => {
  const prevContent = activeContent;
  prevContent.classList.toggle(HIDDEN);
  activeContent = getContentName(content);
  activeContent.classList.toggle(HIDDEN);
};

export { toggleContent };
