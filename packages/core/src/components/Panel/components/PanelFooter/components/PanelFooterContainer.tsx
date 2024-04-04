import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import type { IPanelFooterAttrs } from '../declarations';
import { panelFooterContainerMixin } from '../helpers';
import { Flex, type FlexProps } from '../../../../Flex';

export interface PanelFooterContainerProps
  extends IPanelFooterAttrs,
    FlexProps {}

export const PanelFooterContainer: React.FC<PanelFooterContainerProps> = ({
  alignItems = 'center',
  hasBoxShadow,
  bordered,
  children,
  flex = '0 0 auto',
  hasBackground,
  removeSpace,
  size = 'md',
  styles,
  zIndex = 1,
  ...restFlexProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...restFlexProps}
      zIndex={zIndex}
      flex={flex}
      alignItems={alignItems}
      styles={concat(
        panelFooterContainerMixin({
          bordered,
          hasBackground,
          hasBoxShadow,
          removeSpace,
          size,
          theme,
        }),
        styles,
      )}
    >
      {children}
    </Flex>
  );
};
