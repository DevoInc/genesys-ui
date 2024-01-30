import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { ContentSwitcherItemProps } from '../ContentSwitcherItem';
import { Flex, FlexProps } from '../../../Flex';
import {
  contentSwitcherContainerMixin,
  contentSwitcherContainerMixinProps,
} from './helpers';

export interface ContentSwitcherContainerProps
  extends Omit<
      FlexProps,
      | 'alignContent'
      | 'children'
      | 'childrenFlex'
      | 'columnGap'
      | 'elevation'
      | 'flexDirection'
      | 'flexWrap'
      | 'gap'
      | 'overflow'
      | 'overflowX'
      | 'overflowY'
      | 'padding'
      | 'paddingBottom'
      | 'paddingLeft'
      | 'paddingRight'
      | 'paddingTop'
      | 'rowGap'
    >,
    Pick<ContentSwitcherItemProps, 'wide'>,
    Omit<contentSwitcherContainerMixinProps, 'theme'> {
  /** ContentSwitcher items */
  children?: React.ReactElement | React.ReactElement[];
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
      styles={concat(contentSwitcherContainerMixin({ size, theme }), styles)}
    >
      {children}
    </Flex>
  );
};
