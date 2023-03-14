import * as React from 'react';

// declarations and components
import { GlobalAriaProps, GlobalAttrProps } from '../../declarations';
import { ContentSwitcherItem, ContentSwitcherItemProps } from './subcomponents';

// styled
import {
  StyledContentSwitcher,
  StyledContentSwitcherProps,
} from './StyledContentSwitcher';

export interface ContentSwitcherProps
  extends Omit<GlobalAttrProps, 'role'>,
    GlobalAriaProps,
    StyledContentSwitcherProps {
  /** ContentSwitcher items */
  children?: React.ReactElement<ContentSwitcherItemProps>[];
}

const InternalContentSwitcher: React.FC<ContentSwitcherProps> = ({
  size = 'md',
  children,
  wide,
  ...nativeProps
}) => (
  <StyledContentSwitcher {...nativeProps} size={size} wide={wide}>
    {React.Children.map(children, (child, idx) => {
      return React.cloneElement(child, {
        key: idx,
        size: child.props.size || size,
        wide: child.props.wide || wide,
      });
    })}
  </StyledContentSwitcher>
);

export const ContentSwitcher =
  InternalContentSwitcher as typeof InternalContentSwitcher & {
    Item: typeof ContentSwitcherItem;
  };

ContentSwitcher.Item = ContentSwitcherItem;
