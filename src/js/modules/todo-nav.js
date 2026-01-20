const items = Array.from({ length: 7 }, (_, i) => ({
  title: `Первый список ${i++}`,
}));

const createNavItem = (element) => {
  const template = document.querySelector('#navigation-item').content;
  const navItem = template.querySelector('.navigation__item');
  const item = navItem.cloneNode(true);
  const text = item.querySelector('.button__text');
  text.textContent = element.title;
  return item;
};

const renderNavItems = (items) => {
  const navList = document.querySelector('.navigation__list');
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    fragment.append(createNavItem(item));
  });
  navList.append(fragment);
};

export { renderNavItems, items };
