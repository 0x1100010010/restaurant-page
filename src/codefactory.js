const codefactory = (_type, _attr, _content, _parentId) => {
  const node = document.createElement(_type);
  node.innerText = _content;
  Object.keys(_attr).forEach((attr) => node.setAttribute(attr, _attr[attr]));
  document.getElementById(_parentId).appendChild(node);
  return node;
};

const dropLast = () => {
  const div = document.getElementById('content');
  if (div.childNodes.length > 1) {
    div.removeChild(div.lastElementChild);
  }
};

export { codefactory, dropLast };