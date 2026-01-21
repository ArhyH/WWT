import { VISYALLY_HIDDEN } from '../consts/consts';

const contentNode = document.querySelector('.content');

const getContentName = (name) => contentNode.querySelector(`#${name}`);

let activeContentName = 'first-step';
let activeContentNode = getContentName(activeContentName);

const callbacks = {};

const toggleContent = (contentName) => {
  activeContentNode.classList.add(VISYALLY_HIDDEN);

  activeContentName = contentName;
  activeContentNode = getContentName(activeContentName);
  activeContentNode.classList.remove(VISYALLY_HIDDEN);

  Object.values(callbacks).forEach((callback) => {
    callback(activeContentName);
  });
};

const getActiveContent = () => activeContentName;

const setCallbacks = (name, callback) => {
  callbacks[name] = callback;
};

const shareContentState = () => {
  Object.values(callbacks).forEach((callback) => {
    callback(activeContentName);
  });
};

export { toggleContent, getActiveContent, setCallbacks, shareContentState };
