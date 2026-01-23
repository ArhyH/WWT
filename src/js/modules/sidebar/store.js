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
let mode = SidebarMode.LOCKED_OPEN;

const subscribers = [];

const getEffectiveState = (state) => {
  if (mode === SidebarMode.LOCKED_OPEN) {
    return SidebarState.OPENED;
  }

  return state;
};

const setState = (nextState) => {
  state = getEffectiveState(nextState);
  notify(state, mode);
};

const setMode = (nextMode) => {
  mode = nextMode;

  if (mode === SidebarMode.LOCKED_OPEN) {
    state = SidebarState.OPENED;
  }

  if (mode === SidebarMode.FORCE_CLOSED) {
    state = SidebarState.CLOSED;
  }

  notify(state, mode);
};

const toggle = () => {
  if (mode === SidebarMode.LOCKED_OPEN) {
    return;
  }

  setState(
    state === SidebarState.OPENED ? SidebarState.CLOSED : SidebarState.OPENED
  );
};

const notify = (state, mode) => {
  let isOpened = false;
  let isLockedOpen = false;
  let isCloseButtonVisible = false;

  if (state == SidebarState.OPENED) {
    isOpened = true;
  }

  if (mode == SidebarMode.LOCKED_OPEN) {
    isLockedOpen = true;
  }

  if (isOpened && !isLockedOpen) {
    isCloseButtonVisible = true;
  }

  subscribers.forEach((callback) =>
    callback({ isOpened, isCloseButtonVisible })
  );
};

const subscribe = (callback) => {
  subscribers.push(callback);
  notify(state, mode);
};

export { SidebarState, SidebarMode, setState, setMode, toggle, subscribe };
