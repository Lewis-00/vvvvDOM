export const renderElement = (vNode) => {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }
  if (vNode.tagName) {
    const $element = document.createElement(vNode.tagName);

    Object.entries(vNode.props || {}).forEach(([key, value]) => {
      $element.setAttribute(key, value);
    });

    vNode.children.forEach((child) => {
      $element.append(renderElement(child));
    });

    return $element;
  }
};
