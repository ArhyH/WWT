import { sidebar } from '../common/elements';
import { VISYALLY_HIDDEN } from '../consts/consts';

const closeSidebarButton = document.querySelector('#close-sidebar-button');
const openSidebarButton = document.querySelector('#open-sidebar-button');

const SidebarMode = {
  LOCKED_OPEN: 'locked-open',
  FORCE_CLOSED: 'force-closed',
  FREE: 'free',
};

const SidebarState = {
  OPENED: 'opened',
  CLOSED: 'closed',
};

let state = SidebarState.OPENED;
let mode = SidebarMode.FREE;

const subscribers = [];

const getState = () => {
  if (mode === SidebarMode.LOCKED_OPEN) {
    return SidebarState.OPENED;
  }

  return state;
};

const apply = () => {
  const currentState = getState();
  const isOpened = currentState == SidebarState.OPENED;

  sidebar.classList.toggle(VISYALLY_HIDDEN, !isOpened);

  closeSidebarButton.classList.toggle(
    VISYALLY_HIDDEN,
    !isOpened || mode === SidebarMode.LOCKED_OPEN
  );

  openSidebarButton.classList.toggle(VISYALLY_HIDDEN, isOpened);
};

const notify = () => {
  subscribers.forEach((callback) => callback({ state, mode }));
};

const setState = (nextState) => {
  state = nextState;
  apply();
  notify();
};

const setMode = (nextMode) => {
  mode = nextMode;

  if (mode === SidebarMode.LOCKED_OPEN) {
    state = SidebarState.OPENED;
  }

  if (mode === SidebarMode.FORCE_CLOSED) {
    state = SidebarState.CLOSED;
  }

  apply();
  notify();
};

const toggle = () => {
  if (mode === SidebarMode.LOCKED_OPEN) {
    return;
  }

  setState(
    state === SidebarState.OPENED ? SidebarState.CLOSED : SidebarState.OPENED
  );
};

const subscribe = (callback) => {
  subscribers.push(callback);
};

export { SidebarState, SidebarMode, setState, setMode, toggle, subscribe };
