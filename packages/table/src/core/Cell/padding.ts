export const getVerticalPadding = ({ editable, expandedRow, tall, sizes }) => {
  if (expandedRow) return sizes.afterRow.verPad;
  if (!editable && tall) return sizes.expandedLg.verPad;
  if (!editable) return sizes.expanded.verPad;
  return sizes.cell.verPad;
};

export const getHorizontalPadding = ({
  editable,
  expandedRow,
  tall,
  sizes,
}) => {
  if (expandedRow) return sizes.afterRow.horPad;
  if (!editable && tall) return sizes.expandedLg.horPad;
  if (!editable) return sizes.expanded.horPad;
  return sizes.cell.horPad;
};

export const getPaddingRight = ({
  editable,
  innerActions,
  innerActionsWidth,
  innerEllipsis,
  expandedRow,
  hasComplexContent,
  resizable,
  tall,
  sizes,
}) => {
  let paddingRight = getHorizontalPadding({
    editable,
    expandedRow,
    tall,
    sizes,
  });
  if (hasComplexContent && innerEllipsis) {
    paddingRight += 10 + paddingRight / 2;
  }
  if (resizable) {
    paddingRight += 4;
  }
  if (innerActions) {
    paddingRight += innerActionsWidth + paddingRight / 2;
  }
  return paddingRight;
};
