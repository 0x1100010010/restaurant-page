function header (){
  
  let nav = document.createElement("nav");
  nav.className = 'relative flex items-center justify-between sm:h-10 lg:justify-start'
  nav.innerText = 'Nav'
  document.getElementById('content').appendChild(nav)
}

export default header;