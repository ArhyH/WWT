import { openSidebarButton, sidebar } from './elements';
import { toggleElementVisibility } from './helpers';

export const toggleSidebarVisibility = () => {
  toggleElementVisibility(sidebar);
  toggleElementVisibility(openSidebarButton);
};
