import { toggleSidebarVisibility } from '../helpers/domHelpers';
import { openSidebarButton, page, sidebar } from '../helpers/elements';
import { checkPage, toggleElementVisibility } from '../helpers/helpers';

openSidebarButton.addEventListener('click', toggleSidebarVisibility);

if (checkPage(page, 'main')) {
  openSidebarButton.removeEventListener('click', toggleSidebarVisibility);
  toggleElementVisibility(openSidebarButton);
  toggleElementVisibility(sidebar);
}

if (checkPage(page, 'lists')) {
  toggleElementVisibility(openSidebarButton);
}
