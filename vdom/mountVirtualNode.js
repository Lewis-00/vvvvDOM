export const mountVirtualNode = (vElement, $ref) => {
  $ref.replaceWith(vElement);
  return vElement;
};
