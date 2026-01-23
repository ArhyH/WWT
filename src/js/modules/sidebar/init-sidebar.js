import { setCallbacks, toggleContent } from '../content-manager';
import { updateView } from './sidebar';
import { setMode, SidebarMode, subscribe, toggle } from './store';

const sidebarNode = document.querySelector('.sidebar');
const closeSidebarNode = sidebarNode.querySelector('#close-sidebar-button');
const openSidebarNode = document.querySelector('#open-sidebar-button');

const onContentChange = (contentName) => {
  // if (contentName === 'first-step') {
  //   setMode(SidebarMode.LOCKED_OPEN);
  //   return;
  // }

  if (contentName === 'todo-list') {
    setMode(SidebarMode.FORCE_CLOSED);
    return;
  }

  setMode(SidebarMode.LOCKED_OPEN);
};

const initSidebar = () => {
  subscribe((snapshot) => updateView(snapshot));
  setCallbacks('sidebar', onContentChange);

  sidebarNode.addEventListener('click', (evt) => {
    const listNav = evt.target.closest('#sidebar-nav-lists');
    const tagsNav = evt.target.closest('#sidebar-nav-tags');

    if (!listNav && !tagsNav) {
      return;
    }

    if (listNav) {
      toggleContent('lists');
    }

    if (tagsNav) {
      toggleContent('tags');
    }
  });

  closeSidebarNode.addEventListener('click', toggle);

  openSidebarNode.addEventListener('click', toggle);
};

export { initSidebar };
