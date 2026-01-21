import { setCallbacks, toggleContent } from './content-manager';
import { setMode, SidebarMode, toggle } from './sidebar-store';

const sidebarNode = document.querySelector('.sidebar');
const closeSidebarNode = sidebarNode.querySelector('#close-sidebar-button');
const openSidebarNode = document.querySelector('#open-sidebar-button');
const listNavNode = sidebarNode.querySelector('#sidebar-nav-lists');
const tagsNavNode = sidebarNode.querySelector('#sidebar-nav-tags');

const onContentChange = (contentName) => {
  if (contentName === 'first-step') {
    setMode(SidebarMode.LOCKED_OPEN);
    return;
  }

  if (contentName === 'todo-list') {
    setMode(SidebarMode.FORCE_CLOSED);
    return;
  }

  setMode(SidebarMode.FREE);
};

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

setCallbacks('sidebar', onContentChange);

closeSidebarNode.addEventListener('click', toggle);

openSidebarNode.addEventListener('click', toggle);
