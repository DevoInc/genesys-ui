import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IGlobalAriaAttrs, IGlobalAttrs } from '../../declarations';
import { ContentSwitcherContext } from './context';
import {
  contentSwitcherContainerMixin,
  type contentSwitcherContainerMixinProps,
} from './helpers';
import { Flex, type FlexProps } from '../Flex';
import {
  ContentSwitcherItem,
  type ContentSwitcherItemProps,
} from './components';
import { mergeStyles } from '../../helpers';

export interface ContentSwitcherProps
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
    Omit<contentSwitcherContainerMixinProps, 'theme'>,
    Omit<IGlobalAttrs, 'role'>,
    IGlobalAriaAttrs {
  children?: React.ReactElement[];
}

const InternalContentSwitcher: React.FC<ContentSwitcherProps> = ({
  alignItems = 'center',
  children,
  inline,
  size = 'md',
  style,
  wide,
  width,
  ...restProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...restProps}
      alignItems={alignItems}
      role="tablist"
      inline={inline || !wide}
      width={wide ? '100%' : width}
      style={mergeStyles(contentSwitcherContainerMixin({ size, theme }), style)}
    >
      <ContentSwitcherContext.Provider value={{ size, wide }}>
        {children}
      </ContentSwitcherContext.Provider>
    </Flex>
  );
};

export const ContentSwitcher =
  InternalContentSwitcher as typeof InternalContentSwitcher & {
    Item: typeof ContentSwitcherItem;
  };

ContentSwitcher.Item = ContentSwitcherItem;

InternalContentSwitcher.displayName = 'ContentSwitcher';
ContentSwitcher.Item.displayName = 'ContentSwitcher.Item';
