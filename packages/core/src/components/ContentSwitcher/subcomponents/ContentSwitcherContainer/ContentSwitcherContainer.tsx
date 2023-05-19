import * as React from 'react';
import { useTheme } from 'styled-components';

import { ContentSwitcherItemProps } from '../ContentSwitcherItem';
import { Flex, FlexProps } from '../../../Flex';
import {
  contentSwitcherContainerMixin,
  contentSwitcherContainerMixinProps,
} from './helpers';

export interface ContentSwitcherContainerProps
  extends Omit<FlexProps, 'children'>,
    Pick<ContentSwitcherItemProps, 'wide'>,
    Omit<contentSwitcherContainerMixinProps, 'theme'> {
  /** ContentSwitcher items */
  children?: React.ReactElement<ContentSwitcherItemProps>[];
}

export const ContentSwitcherContainer: React.FC<
  ContentSwitcherContainerProps
> = ({
  alignItems = 'center',
  children,
  inline,
  size,
  styles,
  wide,
  width,
  ...restFlexProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      role="tablist"
      inline={inline || !wide}
      width={wide ? '100%' : width}
      styles={styles || contentSwitcherContainerMixin({ size, theme })}
    >
      {children}
    </Flex>
  );
};
