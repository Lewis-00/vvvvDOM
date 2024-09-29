import { mountVirtualNode } from "./vdom/mountVirtualNode";
import appElement from "./elements/appElement";
import { diffAlgorithm } from "./vdom/diffAlgorithm";
import { createVirtualNode } from "./vdom/createVirtualNode";

let count = 0;
let appVNode = appElement(count);

let $root = mountVirtualNode(
  createVirtualNode(appVNode),
  document.getElementById("root"),
);
const idInterval = setInterval(() => {
  count++;
  const newAppVNode = appElement(count);
  $root = diffAlgorithm(appVNode, newAppVNode, $root);
  appVNode = newAppVNode;
}, 1000);

setTimeout(() => {
  clearInterval(idInterval);
  $root = diffAlgorithm(appVNode, undefined, $root);
}, 3500);
