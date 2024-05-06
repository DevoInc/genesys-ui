import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import type { IPanelHeaderAttrs } from '../declarations';
import { panelHeaderContainerMixin } from '../helpers';
import { Flex, type FlexProps } from '../../../../Flex';
import { PanelContext } from '../../../context';
import { Box } from '../../../../Box';

export interface PanelHeaderContainerProps
  extends Pick<FlexProps, 'as' | 'styles'>,
    Omit<IPanelHeaderAttrs, 'actions'> {
  /** If the content of the panel header is custom and depends exclusively on the user */
  customContent?: boolean;
}

export const PanelHeaderContainer: React.FC<PanelHeaderContainerProps> = ({
  as = 'header',
  bordered,
  children,
  customContent,
  hasBoxShadow,
  hasSubtitle,
  removeSpace,
  size = 'md',
  styles,
}) => {
  const theme = useTheme();
  const context = React.useContext(PanelContext);
  const evalHasBoxShadow = hasBoxShadow ?? context.scrolledBodyContent;
  const commonProps = {
    as,
    flex: '0 0 auto',
    styles: concat(
      panelHeaderContainerMixin({
        bordered,
        hasBoxShadow: evalHasBoxShadow,
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
    <Flex {...commonProps} alignItems={hasSubtitle ? 'flex-start' : 'center'}>
      {children}
    </Flex>
  );
};
