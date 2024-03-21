import { isEnabledItem } from './isEnabledItem';
import { getEnabledItemByIncrement } from './getEnabledItemByIncrement';

export const getEnabledItemByIndex = ({
  items,
  index,
}: {
  /** The array of available items. */
  items: NodeListOf<Element>;
  /** The specific index of the desired following enabled item or if it's the last one. */
  index?: number | 'first' | 'last';
}) => {
  const targetIndex =
    index === 'last' ? items.length - 1 : index === 'first' ? 0 : index;
  const isEnabled = isEnabledItem(items[targetIndex]);
  return isEnabled
    ? items[targetIndex]
    : getEnabledItemByIncrement({
        items,
        currentItemIndex: targetIndex,
        inc: index === 'last' ? -1 : 1,
      });
};
