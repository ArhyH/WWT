import { HIDDEN, VISYALLY_HIDDEN } from '../../consts/consts';

const importButtonNode = document.querySelector('#import-button');
const settingsButtonNode = document.querySelector('#list-settings-button');
const titleNode = document.querySelector('.header__title');

const updateView = ({ isSettingsMode }) => {
  titleNode.classList.toggle(HIDDEN, !isSettingsMode);
  importButtonNode.classList.toggle(VISYALLY_HIDDEN, isSettingsMode);
  settingsButtonNode.classList.toggle(VISYALLY_HIDDEN, !isSettingsMode);
};

export { updateView };
