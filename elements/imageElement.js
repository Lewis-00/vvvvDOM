import { createObjElement } from "../vdom/createObjElement";

const imageElement = () => {
  return createObjElement("img", {
    src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjl2c3ZjMTZsN293N2pzd3RpZGthc25hYm1rdGsyMGU0N2FldGk2ZyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/5VKbvrjxpVJCM/giphy.gif",
    width: "200",
  });
};

export default imageElement;
