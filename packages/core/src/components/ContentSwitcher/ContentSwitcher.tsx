import * as React from 'react';

// declarations and components
import { GlobalAriaProps, GlobalAttrProps } from '../../declarations';
import {
  ContentSwitcherContainer,
  ContentSwitcherContainerProps,
  ContentSwitcherItem,
  ContentSwitcherItemProps,
} from './subcomponents';

export interface ContentSwitcherProps
  extends Omit<GlobalAttrProps, 'role'>,
    GlobalAriaProps,
    ContentSwitcherContainerProps {
  /** ContentSwitcher items */
  children?: React.ReactElement<ContentSwitcherItemProps>[];
}

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
    {React.Children.map(children, (child, idx) => {
      return React.cloneElement(child, {
        key: idx,
        size: child.props.size || size,
        wide: child.props.wide || wide,
      });
    })}
  </ContentSwitcherContainer>
);

export const ContentSwitcher =
  InternalContentSwitcher as typeof InternalContentSwitcher & {
    Item: typeof ContentSwitcherItem;
    Container: typeof ContentSwitcherContainer;
  };

ContentSwitcher.Item = ContentSwitcherItem;
ContentSwitcher.Container = ContentSwitcherContainer;
