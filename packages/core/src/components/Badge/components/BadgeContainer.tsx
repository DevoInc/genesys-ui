import * as React from 'react';

import {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../declarations';

import { StyledBadge, StyledBadgeProps } from '../StyledBadge';

export interface BadgeContainerProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    Omit<StyledBadgeProps, 'hasContent' | 'hasLongText'> {
  /** Tooltip on Badge hover.*/
  tooltip?: string;
  children?: React.ReactNode;
}

export const BadgeContainer: React.FC<BadgeContainerProps> = ({
  children,
  colorScheme = 'neutral',
  hasAbsolutePosition = false,
  inverse = false,
  size = 'md',
  tooltip,
  styles,
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
    <StyledBadge
      {...nativeProps}
      colorScheme={colorScheme}
      css={styles}
      hasAbsolutePosition={hasAbsolutePosition}
      hasContent={hasContent}
      hasLongText={hasLongText}
      inverse={inverse}
      size={size}
      title={tooltip}
    >
      {children}
    </StyledBadge>
  );
};
