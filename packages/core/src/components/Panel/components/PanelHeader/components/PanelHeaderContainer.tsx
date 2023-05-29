import * as React from 'react';
import { css, useTheme } from 'styled-components';
import { concat } from 'lodash';

import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../../declarations';
import { Flex, FlexProps } from '../../../../Flex';
import { PanelHeaderSize } from '../declarations';
import { panelHeaderContainerMixin } from '../helpers';

export interface PanelHeaderContainerProps
  extends FlexProps,
    StyledOverloadCssProps,
    StyledPolymorphicProps {
  /** Apply bordered styles */
  bordered?: boolean;
  /** Apply shadow styles */
  hasBoxShadow?: boolean;
  hasSubtitle?: boolean;
  size?: PanelHeaderSize;
  children: React.ReactNode;
}

export const PanelHeaderContainer: React.FC<PanelHeaderContainerProps> = ({
  as = 'header',
  bordered,
  children,
  hasBoxShadow,
  hasSubtitle,
  size = 'md',
  styles,
  ...restFlexProps
}) => {
  const theme = useTheme();
  const baseStyles = panelHeaderContainerMixin({
    bordered,
    hasBoxShadow,
    size,
    theme,
  });
  return (
    <Flex
      {...restFlexProps}
      alignItems={hasSubtitle ? 'flex-start' : 'center'}
      as={as}
      flex="0 0 auto"
      styles={concat(baseStyles, styles)}
      zIndex={1}
    >
      {children}
    </Flex>
  );
};
