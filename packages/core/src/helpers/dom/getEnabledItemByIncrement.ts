import { isEnabledItem } from './isEnabledItem';

export const getEnabledItemByIncrement = ({
  items,
  currentItemIndex,
  inc = 1,
  depth = 0,
}: {
  /** The array of available items. */
  items: NodeListOf<Element>;
  /** The index of the current item. */
  currentItemIndex: number;
  /** The desired increment to get the following enabled item. */
  inc?: number;
  /** The depth of the search of enabled items. */
  depth?: number;
}) => {
  if (depth > 100) {
    return null;
  }
  let targetIndex = currentItemIndex + inc;
  targetIndex =
    targetIndex > items.length - 1
      ? 0
      : targetIndex < 0
        ? items.length - 1
        : targetIndex;
  const isEnabled = isEnabledItem(items[targetIndex]);
  return isEnabled
    ? items[targetIndex]
    : getEnabledItemByIncrement({
        items,
        currentItemIndex: targetIndex,
        inc,
        depth: depth + 1,
      });
};
