import { createObjElement } from "../vdom/createObjElement";
import imageElement from "./imageElement";

//create dynamicList based on count prop and add each time a random image in a random index
const getDynamicElementsList = (length) => {
  const dynamicElements = Array.from({ length }, (_, i) => {
    return createObjElement("p", {}, [`this is the ${i + 1} child`]);
  });
  const randInt = Math.floor(Math.random() * (dynamicElements.length - 1));

  const newList = dynamicElements.map((el, i) =>
    i === randInt ? imageElement() : el,
  );
  return newList;
};

const appElement = (count) => {
  return createObjElement("div", { id: "app" }, [
    `the count is ${count}`,
    createObjElement("input", { type: "text" }),
    ...getDynamicElementsList(count),
  ]);
};

export default appElement;
