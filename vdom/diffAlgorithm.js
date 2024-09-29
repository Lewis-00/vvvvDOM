import { createObjElement } from "./createObjElement";
import { createVirtualNode } from "./createVirtualNode";
import { mountVirtualNode } from "./mountVirtualNode";

const propsDiffAlgorithm = (oldVNodeProps, newVNodeProps, $root) => {
  const propsToAdd = new Map(Object.entries(newVNodeProps));
  const propsToRemove = [];
  for (let key of Object.keys(oldVNodeProps)) {
    if (!propsToAdd.has(key)) {
      propsToRemove.push(key);
    }
  }

  propsToAdd.forEach((value, key) => {
    $root.setAttribute(key, value);
  });

  propsToRemove.forEach((key) => {
    $root.removeAttribute(key);
  });
};

const childrenDiffAlgorithm = (oldVNodeProps, newVNodeProps, $root) => {
  //wip
  return $root;
};

export const diffAlgorithm = (oldVNode, newVNode, $root) => {
  if (newVNode === undefined) {
    return mountVirtualNode(
      createVirtualNode(createObjElement("div", { id: "root" })),
      $root,
    );
  }

  if (typeof oldVNode === "string" || typeof newVNode === "string") {
    if (oldVNode !== newVNode) {
      return mountVirtualNode(createVirtualNode(newVNode), $root);
    } else {
      return $root;
    }
  }

  if (oldVNode.tagName !== newVNode.tagName) {
    return mountVirtualNode(createVirtualNode(newVNode), $root);
  }

  propsDiffAlgorithm(oldVNode.props, newVNode.props, $root);
  // const childrenDiff = childrenDiffAlgorithm(
  //   oldVNode.children,
  //   newVNode.children,
  //   $root
  // );

  return $root;
};
