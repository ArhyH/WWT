import { VISYALLY_HIDDEN } from '../consts/consts';

const contentNode = document.querySelector('.content');

const getContentName = (name) => contentNode.querySelector(`#${name}`);

let activeContent = getContentName('first-step');

const toggleContent = (content) => {
  const prevContent = activeContent;
  prevContent.classList.toggle(VISYALLY_HIDDEN);
  activeContent = getContentName(content);
  activeContent.classList.toggle(VISYALLY_HIDDEN);
};

const getActiveContent = () => activeContent;

export { toggleContent, getActiveContent };
