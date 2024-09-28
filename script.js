import { createElement } from "./vdom/createElement";
import { mountIntoDom } from "./vdom/mount";
import { renderElement } from "./vdom/renderElement";

const vImgEl = createElement("img", {
  src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnZiZmt0NnFvaTJhMXZicXE2bGt0dGYzOXNtMmV2NDMxdGE2bm5hMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MUHNdrm3vk7MoyUsCO/giphy.gif",
});
const vApp = createElement("div", { id: "app" }, ["Hello world", vImgEl]);

mountIntoDom(renderElement(vApp), document.getElementById("root"));
