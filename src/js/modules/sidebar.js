import { toggleSidebarVisibility } from '../helpers/domHelpers';
import { page, sidebar } from '../helpers/elements';
import { checkPage, toggleElementVisibility } from '../helpers/helpers';

const closeSidebarButton = document.querySelector('#close-sidebar-button');

closeSidebarButton.addEventListener('click', toggleSidebarVisibility);

if (checkPage(page, 'main')) {
  closeSidebarButton.removeEventListener('click', toggleSidebarVisibility);
  toggleElementVisibility(closeSidebarButton);
}

if (checkPage(page, 'lists')) {
  toggleElementVisibility(sidebar);
}
