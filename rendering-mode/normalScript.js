import appElement from "../elements/appElement";
import { mountVirtualNode } from "../vdom/mountVirtualNode";
import { createVirtualNode } from "../vdom/createVirtualNode";

const main = () => {
  console.log("hello from main");

  let count = 0;

  let appObjElement = appElement(count);

  let $root = mountVirtualNode(
    createVirtualNode(appObjElement),
    document.getElementById("root"),
  );
  //in this way we will replace the entire app node each time, also losing the input text state due to a replacement
  const myInterval = setInterval(() => {
    count++;
    const newAppEl = appElement(count);
    $root = mountVirtualNode(createVirtualNode(newAppEl), $root);
  }, 1000);

  setTimeout(() => {
    clearInterval(myInterval);
  }, 10000);
};

export const domMain = main;
