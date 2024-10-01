import { createObjElement } from "./createObjElement";
import { createVirtualNode } from "./createVirtualNode";
import { mountVirtualNode } from "./mountVirtualNode";

//combine the children with the same index as old and new
const combineChildren = (oldChildren, newChildren) => {
  const minLength = Math.min(oldChildren.length, newChildren.length);
  return oldChildren.slice(0, minLength).map((oldChild, i) => ({
    old: oldChild,
    new: newChildren[i],
  }));
};

const propsDiffAlgorithm = (oldVNodeProps, newVNodeProps, $root) => {
  const propsToAdd = new Map(Object.entries(newVNodeProps));
  const propsToRemove = Object.keys(oldVNodeProps).filter(
    (propKey) => !propsToAdd.has(propKey),
  );

  propsToAdd.forEach((value, key) => {
    $root.setAttribute(key, value);
  });

  propsToRemove.forEach((key) => {
    $root.removeAttribute(key);
  });
};

const childrenDiffAlgorithm = (oldVNodeChildren, newVNodeChildren, $root) => {
  const combinedVChildren = combineChildren(oldVNodeChildren, newVNodeChildren);
  const $childList = $root.childNodes;

  //replacing the $childNodes with the same index in the list of child
  for (let i = 0; i < combinedVChildren.length; i++) {
    const currentChildToDiff = combinedVChildren[i];
    diffAlgorithm(
      currentChildToDiff.old,
      currentChildToDiff.new,
      $childList[i],
    );
  }

  //appending the rest of the new virtual nodes if exist
  const newVNodeToAppend = newVNodeChildren.slice(combinedVChildren.length);
  if (newVNodeToAppend.length) {
    newVNodeToAppend.forEach((vNode) =>
      $root.appendChild(createVirtualNode(vNode)),
    );
  }
};

export const diffAlgorithm = (oldVNode, newVNode, $root) => {
  if (!newVNode) {
    $root.remove();
    return null;
  }

  if (
    newVNode.tagName !== oldVNode.tagName ||
    typeof newVNode !== typeof oldVNode ||
    (typeof newVNode === "string" && oldVNode !== newVNode)
  ) {
    return mountVirtualNode(createVirtualNode(newVNode), $root);
  }

  if (newVNode.tagName) {
    propsDiffAlgorithm(oldVNode.props, newVNode.props, $root);
    childrenDiffAlgorithm(oldVNode.children, newVNode.children, $root);
  }
  return $root;
};
