const navList = document.querySelector('.navigation__list');
const template = document.querySelector('#navigation-item').content;
const navItem = template.querySelector('.navigation__item');
const fragment = document.createDocumentFragment();

const items = Array.from({ length: 7 }, (_, i) => ({
  title: `Первый список ${i++}`,
}));

const createNavItem = (element) => {
  const item = navItem.cloneNode(true);
  const text = item.querySelector('.button__text');
  text.textContent = element.title;
  return item;
};

const renderNavItems = (items) => {
  console.log(items);
  items.forEach((item) => {
    console.log(item);
    fragment.append(createNavItem(item));
  });
  navList.append(fragment);
};

renderNavItems(items);
