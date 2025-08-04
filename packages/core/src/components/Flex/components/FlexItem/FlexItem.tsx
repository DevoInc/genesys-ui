import * as React from 'react';

import type { ILayoutFlexItem } from '../../../../declarations';
import { getBasedCssVariablesStyle } from '../../../../helpers';
import { Box, type BoxProps } from '../../../Box';
import { FLEX_ITEM_CLASS_NAME_BASE } from '../../constants';

export interface FlexItemProps extends BoxProps, ILayoutFlexItem {}

export const FlexItem: React.FC<FlexItemProps> = ({
  children,
  className,
  style,
  order,
  ...restBoxProps
}) => {
  const basedCssVariablesStyle = getBasedCssVariablesStyle({
    order,
  });
  const classNames = [
    `${FLEX_ITEM_CLASS_NAME_BASE} `,
    className && `${className} `,
  ]
    .join('')
    .trim();
  return (
    <Box
      {...restBoxProps}
      className={classNames}
      style={{ ...basedCssVariablesStyle, ...style }}
    >
      {children}
    </Box>
  );
};
