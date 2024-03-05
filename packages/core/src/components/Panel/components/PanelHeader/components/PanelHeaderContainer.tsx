import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { IPanelHeaderAttrs } from '../declarations';
import { panelHeaderContainerMixin } from '../helpers';
import { Flex, FlexProps } from '../../../../Flex';
import { PanelContext } from '../../../context';

export interface PanelHeaderContainerProps
  extends FlexProps,
    Omit<IPanelHeaderAttrs, 'actions'> {}

export const PanelHeaderContainer: React.FC<PanelHeaderContainerProps> = ({
  alignItems,
  as = 'header',
  bordered,
  children,
  flex = '0 0 auto',
  hasBoxShadow,
  hasSubtitle,
  removeSpace,
  size = 'md',
  styles,
  zIndex = 1,
  ...restFlexProps
}) => {
  const theme = useTheme();
  const context = React.useContext(PanelContext);
  const evalHasBoxShadow = hasBoxShadow ?? context.scrolledBodyContent;
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems || (hasSubtitle ? 'flex-start' : 'center')}
      as={as}
      flex={flex}
      styles={concat(
        panelHeaderContainerMixin({
          bordered,
          hasBoxShadow: evalHasBoxShadow,
          removeSpace,
          size,
          theme,
        }),
        styles,
      )}
      zIndex={zIndex}
    >
      {children}
    </Flex>
  );
};
