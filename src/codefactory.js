export default function codefactory( _type, _class, _content, _parent_id ) {
  let node = document.createElement(_type);
  node.className = _class
  node.innerText = _content
  document.getElementById(_parent_id).appendChild(node)
}