import { TGlobalSpacing } from '../../declarations';
import { getSpacingPropCss } from '../../helpers';
import { DefaultTheme } from 'styled-components';

/**
 * Get the children flex css value when they fit the whole space creating rows
 *
 * @param props Props object
 * @param props.childrenByRow Number of children by row
 * @param props.hSpacing Prop valur for horizontal spacing: cmp-xs, cmp-md...
 * @param props.theme Theme with the design tokens
 * @return The result of the gap offset
 */
export const getChildrenByRowFlex = ({
  childrenByRow,
  hSpacing,
  theme,
}: {
  childrenByRow: number;
  hSpacing: TGlobalSpacing;
  theme: DefaultTheme;
}) => {
  if (childrenByRow <= 0) return undefined;
  const childrenEqualWidthPercent = 100 / childrenByRow + '%';
  // Horizontal gap compensation applied to each flex item: horizontal space * number of gutters / number of items
  const hSpacingCssValue = getSpacingPropCss(theme)(hSpacing);
  const gutterFactor = (childrenByRow - 1) / childrenByRow;
  const gapOffset = `${hSpacingCssValue} * ${gutterFactor}`;
  return `0 1 calc(${childrenEqualWidthPercent} - ${gapOffset})`;
};
