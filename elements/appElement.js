import { createObjElement } from "../vdom/createObjElement";

const appElement = (count) => {
  return createObjElement("div", { id: "app", dataCount: String(count) }, [
    `the count is ${count}`,
    createObjElement("input"),
  ]);
};

export default appElement;
