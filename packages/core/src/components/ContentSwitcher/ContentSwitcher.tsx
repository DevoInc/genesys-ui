import * as React from 'react';

import { GlobalAriaProps, GlobalAttrProps } from '../../declarations';

import { ContentSwitcherContext } from './context';

import {
  ContentSwitcherContainer,
  ContentSwitcherContainerProps,
  ContentSwitcherItem,
} from './subcomponents';

export interface ContentSwitcherProps
  extends Omit<GlobalAttrProps, 'role'>,
    GlobalAriaProps,
    ContentSwitcherContainerProps {}

const InternalContentSwitcher: React.FC<ContentSwitcherProps> = ({
  size = 'md',
  children,
  wide,
  tooltip,
  ...nativeProps
}) => (
  <ContentSwitcherContainer
    {...nativeProps}
    size={size}
    tooltip={tooltip}
    wide={wide}
  >
    <ContentSwitcherContext.Provider value={{ size, wide }}>
      {children}
    </ContentSwitcherContext.Provider>
  </ContentSwitcherContainer>
);

export const ContentSwitcher =
  InternalContentSwitcher as typeof InternalContentSwitcher & {
    Item: typeof ContentSwitcherItem;
  };

ContentSwitcher.Item = ContentSwitcherItem;

InternalContentSwitcher.displayName = 'ContentSwitcher';
ContentSwitcher.Item.displayName = 'ContentSwitcher.Item';
