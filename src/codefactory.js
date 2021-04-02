export default function codefactory( _id, _type, _class, _content, _parent_id ) {
  let node = document.createElement(_type);
  node.className = _class
  node.innerText = _content
  node.setAttribute('id', _id)
  document.getElementById(_parent_id).appendChild(node)
  console.log(_content)
}