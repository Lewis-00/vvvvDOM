import { createObjElement } from "../vdom/createObjElement";
import imageElement from "./imageElement";

const dynamicElementsList = (length) => {
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
    ...dynamicElementsList(count),
  ]);
};

export default appElement;
