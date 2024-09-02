import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

import { StyledBadgeContainer } from './StyledBadgeContainer';
import { IBadgeContainer } from './declarations';

export interface BadgeContainerProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IBadgeContainer {
  children?: React.ReactNode;
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
      $hasAbsolutePosition={hasAbsolutePosition}
      $hasContent={hasContent}
      $hasLongText={hasLongText}
      $inverse={inverse}
      $size={size}
      title={tooltip}
    >
      {children}
    </StyledBadgeContainer>
  );
};
