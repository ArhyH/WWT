import { toggleSidebarVisibility } from '../common/domHelpers';
import { openSidebarButton, page, sidebar } from '../common/elements';
import { checkPage, toggleElementVisibility } from '../common/helpers';

openSidebarButton.addEventListener('click', toggleSidebarVisibility);

if (checkPage(page, 'main')) {
  openSidebarButton.removeEventListener('click', toggleSidebarVisibility);
  toggleElementVisibility(openSidebarButton);
  toggleElementVisibility(sidebar);
}

if (checkPage(page, 'lists')) {
  toggleElementVisibility(openSidebarButton);
}

// Ловить клик по кнопке настроек
// Открывать модалку
// Вырезать кнопку настроек и встраивать ее в слот внутри модалку
// Когда модалка закрывается, возвращать кнопку на место
// Убирать слушатели
