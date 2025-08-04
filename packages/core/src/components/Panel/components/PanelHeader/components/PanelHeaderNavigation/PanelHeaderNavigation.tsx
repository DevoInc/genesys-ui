import * as React from 'react';

import type { IPanelHeaderAttrs } from '../../declarations';
import type { IStyleAttr } from '../../../../../../declarations';
import {
  getBasedCssVariablesStyle,
  getVariableBasedClassNames,
} from '../../../../../../helpers';
import { Box, type BoxProps } from '../../../../../Box';
import { PANEL_NAVIGATION_CLASS_NAME_BASE } from '../../../../constants';

export interface PanelHeaderNavigationProps extends Omit<BoxProps, 'children'> {
  children: IPanelHeaderAttrs['navigationContent'];
  parentPadding?: IStyleAttr['style'];
}

export const PanelHeaderNavigation: React.FC<PanelHeaderNavigationProps> = ({
  as,
  children,
  className,
  parentPadding,
  style,
  ...restBoxProps
}) => {
  const negativeSpacing = {
    marginLeft: `calc(${parentPadding?.paddingLeft} * -1)`,
    marginRight: `calc(${parentPadding?.paddingRight} * -1)`,
    marginBottom: `calc(${parentPadding?.paddingBottom} * -1)`,
  };
  const basedCssVariablesStyle = getBasedCssVariablesStyle(negativeSpacing);
  const classNames = [
    `${PANEL_NAVIGATION_CLASS_NAME_BASE} `,
    ...getVariableBasedClassNames(negativeSpacing),
    className && `${className} `,
  ]
    .join('')
    .trim();
  return (
    <Box
      {...restBoxProps}
      as={as}
      className={classNames}
      flex="0 0 auto"
      style={{ ...basedCssVariablesStyle, ...style }}
      zIndex={1}
    >
      {typeof children === 'function' ? children() : children}
    </Box>
  );
};
