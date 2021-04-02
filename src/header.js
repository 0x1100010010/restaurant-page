import codefactory from './codefactory';

export default function header (){
  // codefactory( _id, _type, _class, _content, _parent_id )
  codefactory('header', 'header', 'text-gray-600 body-font', '', 'content');
  codefactory('headercontainer', 'div', 'container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center', '', 'header');
  codefactory( '', 'a', 'title-font cursor-pointer font-medium items-center text-gray-900', 'Le-Hotel', 'headercontainer' );
  codefactory('headerlinks', 'nav', 'md:ml-auto flex flex-wrap items-center text-base justify-center', '', 'headercontainer');
  ['tab1', 'tab2', 'tab3'].forEach ( el => codefactory('', 'a', 'mr-5 hover:text-gray-900 cursor-pointer', el, 'headercontainer')  );
}