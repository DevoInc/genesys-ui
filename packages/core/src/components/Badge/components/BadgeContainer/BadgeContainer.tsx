import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

import type { TBadgeColorScheme } from '../../declarations';
import {
  StyledBadgeContainer,
  type StyledBadgeContainerProps,
} from './StyledBadgeContainer';

export interface BadgeContainerProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    Omit<
      StyledBadgeContainerProps,
      'hasContent' | 'hasLongText' | '$colorScheme'
    > {
  /** Tooltip on Badge hover.*/
  tooltip?: string;
  children?: React.ReactNode;
  /** It defines the color schema for the background and text color.
   * There are predefined types: primary, secondary... etc.
   * It's possible to use a custom color used for the background color and
   * auto-generated for the text based on this one to maintain AA accessible contrast.*/
  colorScheme?: TBadgeColorScheme | React.CSSProperties['backgroundColor'];
}

export const BadgeContainer: React.FC<BadgeContainerProps> = ({
  children,
  colorScheme = 'neutral',
  hasAbsolutePosition = false,
  inverse = false,
  size = 'md',
  tooltip,
  style,
  ...nativeProps
}) => {
  const hasContent = React.useMemo(() => {
    const childrenAsArray = Array.isArray(children) ? children : [children];
    return childrenAsArray.some((child: React.ReactNode) => {
      return React.isValidElement(child);
    });
  }, [children]);
  const hasLongText = React.useMemo(() => {
    const childrenAsArray = Array.isArray(children) ? children : [children];
    return childrenAsArray.some((child: React.ReactNode) => {
      return React.isValidElement(child)
        ? typeof child.props.children === 'string' &&
            child.props.children.length > 1
        : false;
    });
  }, [children]);

  return (
    <StyledBadgeContainer
      {...nativeProps}
      $colorScheme={colorScheme}
      css={style}
      hasAbsolutePosition={hasAbsolutePosition}
      hasContent={hasContent}
      hasLongText={hasLongText}
      inverse={inverse}
      size={size}
      title={tooltip}
    >
      {children}
    </StyledBadgeContainer>
  );
};
