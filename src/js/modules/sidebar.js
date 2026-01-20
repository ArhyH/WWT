import { toggleSidebarVisibility } from '../common/domHelpers';
import { sidebar } from '../common/elements';
import { toggleElementVisibility } from '../common/helpers';

const closeSidebarButton = document.querySelector('#close-sidebar-button');

closeSidebarButton.addEventListener('click', toggleSidebarVisibility);

// if (checkPage(page, 'main')) {
closeSidebarButton.removeEventListener('click', toggleSidebarVisibility);
toggleElementVisibility(closeSidebarButton);
// }

// if (checkPage(page, 'lists')) {
//   toggleElementVisibility(sidebar);
// }
