import { codefactory, dropLast } from './codefactory';

const home = () => {
  dropLast();
  codefactory('section', { class: 'text-gray-600 body-font', id: 'home' }, '', 'content');
  codefactory('div', { class: 'container mx-auto flex px-5 py-24 md:flex-row flex-col items-center', id: 'home-container' }, '', 'home');
  codefactory('div', { class: 'lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center', id: 'home-description' }, '', 'home-container');
  codefactory('h1', { class: 'title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900' }, 'My Restaurant', 'home-description');
  codefactory('p', { class: 'mb-8 leading-relaxed' }, 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.', 'home-description');
  codefactory('div', { class: 'flex justify-center', id: 'action-buttons' }, '', 'home-description');
  codefactory('button', { class: 'inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg' }, 'Button', 'action-buttons');
  codefactory('button', { class: 'ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg' }, 'Button', 'action-buttons');
  codefactory('div', { class: 'lg:max-w-lg lg:w-full md:w-1/2 w-5/6', id: 'img-container' }, '', 'home-container');
  codefactory('img', { class: 'object-cover object-center rounded', alt: 'hero', src: 'https://dummyimage.com/720x600' }, '', 'img-container');
};

export default home;