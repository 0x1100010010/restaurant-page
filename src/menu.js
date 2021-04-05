import { codefactory, dropLast } from './codefactory';

const menu = () => {
  dropLast();
  codefactory('section', { class: 'text-gray-600 body-font', id: 'menu' }, '', 'content');
  codefactory('section', { class: 'container px-5 py-5 mx-auto', id: 'menu-container' }, '', 'menu');
  codefactory('h1', { class: 'title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900' }, 'My Menu', 'menu-container');
  codefactory('ul', { class: 'list-outside md:list-inside', id: 'menu-ul' }, '', 'menu-container');
  for (let i = 1; i < 7; i += 1) {
    codefactory('li', { class: 'list-disc' }, `Menu item ${i}`, 'menu-ul');
  }
};

export default menu;