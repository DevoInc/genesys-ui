import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import { GlobalAriaProps, GlobalAttrProps } from '../../declarations';

import { ContentSwitcherContext } from './context';

import {
  contentSwitcherContainerMixin,
  contentSwitcherContainerMixinProps,
} from './helpers';

import { Flex, FlexProps } from '../Flex';
import { ContentSwitcherItem, ContentSwitcherItemProps } from './components';

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
    Omit<GlobalAttrProps, 'role'>,
    GlobalAriaProps {
  children?: React.ReactElement[];
}

const InternalContentSwitcher: React.FC<ContentSwitcherProps> = ({
  alignItems = 'center',
  children,
  inline,
  size = 'md',
  styles,
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
      styles={concat(contentSwitcherContainerMixin({ size, theme }), styles)}
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
