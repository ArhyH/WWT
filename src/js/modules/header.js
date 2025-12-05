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

// Ловить клик по кнопке настроек
// Открывать модалку
// Вырезать кнопку настроек и встраивать ее в слот внутри модалку
// Когда модалка закрывается, возвращать кнопку на место
// Убирать слушатели
