export const createObjElement = (tagName, props = {}, children = []) => {
  return {
    tagName,
    props,
    children,
  };
};
