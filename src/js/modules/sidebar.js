import { toggleSidebarVisibility } from '../common/domHelpers';
import { page, sidebar } from '../common/elements';
import { checkPage, toggleElementVisibility } from '../common/helpers';

const closeSidebarButton = document.querySelector('#close-sidebar-button');

closeSidebarButton.addEventListener('click', toggleSidebarVisibility);

if (checkPage(page, 'main')) {
  closeSidebarButton.removeEventListener('click', toggleSidebarVisibility);
  toggleElementVisibility(closeSidebarButton);
}

if (checkPage(page, 'lists')) {
  toggleElementVisibility(sidebar);
}
