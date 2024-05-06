import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import type { IPanelFooterAttrs } from '../declarations';
import { panelFooterContainerMixin } from '../helpers';
import { Flex, type FlexProps } from '../../../../Flex';
import { Box } from '../../../../Box';

export interface PanelFooterContainerProps
  extends IPanelFooterAttrs,
    Pick<FlexProps, 'as' | 'styles'> {
  /** If the content of the panel footer is custom and depends exclusively on the user */
  customContent?: boolean;
}

export const PanelFooterContainer: React.FC<PanelFooterContainerProps> = ({
  as = 'footer',
  customContent,
  hasBoxShadow,
  bordered,
  children,
  hasBackground,
  removeSpace,
  size = 'md',
  styles,
}) => {
  const theme = useTheme();
  const commonProps = {
    as,
    flex: '0 0 auto',
    styles: concat(
      panelFooterContainerMixin({
        bordered,
        hasBackground,
        hasBoxShadow,
        removeSpace,
        size,
        theme,
      }),
      styles,
    ),
    zIndex: 1,
  };
  return customContent ? (
    <Box {...commonProps}>{children}</Box>
  ) : (
    <Flex {...commonProps} alignItems="center">
      {children}
    </Flex>
  );
};
