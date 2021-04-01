import codefactory from './codefactory';

function header (){
  
  // <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

  // let nav = document.createElement("div");
  // nav.className = 'text-gray-600 body-font'
  // nav.appendChild = document.createElement("div");
  // document.getElementById('content').appendChild(nav)

  // let nav = document.createElement("nav");
  // nav.className = 'relative flex items-center justify-between sm:h-10 lg:justify-start'
  // nav.innerText = 'Nav'
  // document.getElementById('content').appendChild(nav)
  codefactory('nav', 'relative flex items-center justify-between sm:h-10 lg:justify-start', 'Navigation Bar', 'content')
}

export default header;