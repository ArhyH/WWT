import { onTodoListUpdate } from './todo-list-modal';

const todoListsNode = document.querySelectorAll('.todo-lists');

const renderTodoLists = (todoLists, renderTodoListItem) => {
  [...todoListsNode].forEach((list) => {
    const placement = list.dataset.placement;

    const fragment = document.createDocumentFragment();
    todoLists.lists.forEach((element) => {
      fragment.append(renderTodoListItem(element, placement));
    });

    list.innerHTML = '';
    list.append(fragment);
  });
};

const onTodoListSettingsClick = (evt, todoList, todoLists) => {
  const todolistItem = document.querySelector('.todo-list');
  // как определять выбранный туду лист?
  // У меня есть список туду листов в сайдбаре, который виден всегда
  // Когда я нахожусь на странице всех списков, у меня второе отображение всех списков
  // Кнопки управления списками доступны только когда я нахожусь на странице конкретного списка
  // у меня нет страниц под каждый список, есть одна универсальная, которая паказывает туду элементы
  // на ней и есть кнопки для управления списками

  // Я хочу, чтобв при клике на 1 из листов в списке листов у меня открывалась 1 страница, а ее контент менялся в зависимости от выбранного списка
  // Получается, когда я открываю страницу и рендерю элементы, мне нужно на дом элемент анвешивать айдишник?
  // Хотя тодже не верно, так как в экземпляре списка теперь есть поле отвечающее за айди
  // А откуда мне в таком сучае брать todoList?

  // я могу рендерить и потом брать из дата атрибута в доме
  // но выглядит как плоховатое решение

  if (!todolistItem) {
    return;
  }

  const listId = todoList.id;
  const list = todoLists.getById(listId);

  if (evt.target.closest('#delete-list')) {
    todoLists.delete(listId);
    renderTodoLists();
    return;
  }

  if (evt.target.closest('#update-list')) {
    onTodoListUpdate(list);
    return;
  }

  if (evt.target.closest('#export')) {
    // export via json
    return;
  }
};

export { onTodoListSettingsClick, renderTodoLists };
