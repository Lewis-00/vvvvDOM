// This function will create a dom element like <div></div> with additional attributes and children
export const createVirtualNode = (vNode) => {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }
  if (vNode.tagName) {
    const $element = document.createElement(vNode.tagName);

    Object.entries(vNode.props || {}).forEach(([key, value]) => {
      $element.setAttribute(key, value);
    });

    vNode.children.forEach((child) => {
      $element.append(createVirtualNode(child));
    });

    return $element;
  }
};
