import { VISYALLY_HIDDEN } from '../../consts/consts';

const sidebarNode = document.querySelector('.sidebar');
const closeSidebarNode = sidebarNode.querySelector('#close-sidebar-button');
const openSidebarNode = document.querySelector('#open-sidebar-button');

const updateView = ({ isOpened, isCloseButtonVisible }) => {
  sidebarNode.classList.toggle(VISYALLY_HIDDEN, !isOpened);

  closeSidebarNode.classList.toggle(VISYALLY_HIDDEN, !isCloseButtonVisible);

  openSidebarNode.classList.toggle(VISYALLY_HIDDEN, isOpened);
};

export { updateView };
