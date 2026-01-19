const items = Array.from({ length: 7 }, (_, i) => ({
  title: `Первый список ${i++}`,
}));

const createNavItem = (element) => {
  const template = document.querySelector('#navigation-item').content;
  const navItem = template.querySelector('.navigation__item');
  console.log(document.querySelector('#navigation-item').content, 'navItem');
  const item = navItem.cloneNode(true);
  const text = item.querySelector('.button__text');
  text.textContent = element.title;
  console.log(item);
  return item;
};

const renderNavItems = (items) => {
  const navList = document.querySelector('.navigation__list');
  const fragment = document.createDocumentFragment();

  console.log(items);
  items.forEach((item) => {
    console.log(item);
    fragment.append(createNavItem(item));
  });
  console.log(fragment);
  navList.append(fragment);
};

export { renderNavItems, items };
