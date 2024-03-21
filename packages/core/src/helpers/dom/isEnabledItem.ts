export const isEnabledItem = (item: Element) =>
  !(item.getAttribute('aria-disabled') || item.getAttribute('disabled'));
