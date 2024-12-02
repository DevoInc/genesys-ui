import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IPanelHeaderAttrs } from '../../declarations';
import type { IPanelSpaceAttrs } from '../../../../declarations';
import { panelHeaderContainerMixin } from '../../helpers';
import { Flex, type FlexProps } from '../../../../../Flex';
import { PanelContext } from '../../../../context';
import { Box } from '../../../../../Box';
import { mergeStyles } from '../../../../../../helpers';

export interface PanelHeaderContainerProps
  extends Pick<FlexProps, 'as' | 'style'>,
    IPanelSpaceAttrs,
    Omit<IPanelHeaderAttrs, 'actions'> {
  /** If the content of the panel header is custom and depends exclusively on
   * the user */
  customContent?: boolean;
}

export const PanelHeaderContainer: React.FC<PanelHeaderContainerProps> = ({
  as = 'header',
  bordered,
  children,
  customContent,
  hasBoxShadow,
  hasSubtitle,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  removeSpace,
  size = 'md',
  style,
}) => {
  const theme = useTheme();
  const context = React.useContext(PanelContext);
  const evalHasBoxShadow = hasBoxShadow ?? context.scrolledBodyContent;
  const commonProps = {
    as,
    flex: '0 0 auto',
    style: mergeStyles(
      panelHeaderContainerMixin({
        bordered,
        hasBoxShadow: evalHasBoxShadow,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        removeSpace,
        size,
        theme,
      }),
      style,
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
