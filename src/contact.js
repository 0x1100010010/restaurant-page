import { codefactory, dropLast } from './codefactory';

export default function contact() {
  dropLast();
  codefactory('section', { class: 'text-gray-600 body-font', id: 'contact' }, '', 'content');
  codefactory('div', { class: 'container px-5 py-5 mx-auto max-w-lg', id: 'menu-container' }, '', 'contact');
  codefactory('h1', { class: 'title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900' }, 'Contect', 'menu-container');
  codefactory('p', { class: 'leading-relaxed mb-5 text-gray-600' }, 'Post-ironic portland shabby chic echo park, banjo fashion axe', 'menu-container');
  codefactory('div', { class: 'relative mb-4', id: 'email-container' }, '', 'menu-container');
  codefactory('label', { for: 'email', class: 'leading-7 text-sm text-gray-600' }, 'Email', 'email-container');
  codefactory('input', { type: 'email', id: 'email', class: 'w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' }, '', 'email-container');
  codefactory('div', { class: 'relative mb-4', id: 'message-container' }, '', 'menu-container');
  codefactory('label', { for: 'message', class: 'leading-7 text-sm text-gray-600' }, 'Message', 'message-container');
  codefactory('textarea', { type: 'message', id: 'message', class: 'w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' }, '', 'message-container');
  codefactory('button', { class: 'text-white w-full bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg' }, 'Submit', 'menu-container');
  codefactory('p', { class: 'text-xs text-gray-500 mt-3' }, 'Chicharrones blog helvetica normcore iceland tousled brook viral artisan.', 'menu-container');
}