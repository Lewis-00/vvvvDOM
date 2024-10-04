import { mountVirtualNode } from "../vdom/mountVirtualNode";
import appElement from "../elements/appElement";
import { diffAlgorithm } from "../vdom/diffAlgorithm";
import { createVirtualNode } from "../vdom/createVirtualNode";

const main = () => {
  let count = 0;

  let appObjElement = appElement(count);

  let $root = mountVirtualNode(
    createVirtualNode(appObjElement),
    document.getElementById("root"),
  );

  const idInterval = setInterval(() => {
    count++;
    const newAppObjElement = appElement(count);
    $root = diffAlgorithm(appObjElement, newAppObjElement, $root);
    appObjElement = newAppObjElement;
  }, 1000);

  setTimeout(() => {
    clearInterval(idInterval);
  }, 10000);
};

export const virtualDomMain = main;
