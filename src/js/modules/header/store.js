const HeaderMode = {
  IMPORT: 'import',
  SETTINGS: 'settings',
};

let mode = HeaderMode.IMPORT;

const subscribers = [];

const notify = (mode) => {
  let isSettingsMode = false;

  if (mode === HeaderMode.SETTINGS) {
    isSettingsMode = true;
  }

  subscribers.forEach((callback) => {
    callback({ isSettingsMode });
  });
};

const setMode = (nextMode) => {
  mode = nextMode;
  notify(mode);
};

const subscribe = (callback) => {
  subscribers.push(callback);
  notify(mode);
};

export { HeaderMode, setMode, subscribe };
