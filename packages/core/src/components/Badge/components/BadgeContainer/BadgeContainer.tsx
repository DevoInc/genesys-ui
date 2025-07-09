import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyleAttr,
  IPolymorphic,
} from '../../../../declarations';

import type { IBadgeContainer } from './declarations';
import { BADGE_CLASS_NAME_BASE } from '../../constants';
import { getAccTextColor, isValidColor } from '../../../../helpers';

export interface BadgeContainerProps
  extends IPolymorphic,
    IStyleAttr,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IBadgeContainer {
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLElement>['className'];
}

export const BadgeContainer: React.FC<BadgeContainerProps> = ({
  as: Component = 'span',
  children,
  className,
  colorScheme = 'neutral',
  hasAbsolutePosition = false,
  hasIcon,
  inverse = false,
  size = 'md',
  tooltip,
  style,
  ...nativeProps
}) => {
  const classNameBase = BADGE_CLASS_NAME_BASE;
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
  const customColorStyles = isValidColor(colorScheme)
    ? {
        backgroundColor: colorScheme,
        color: getAccTextColor(colorScheme, '#fff', '#222'),
      }
    : {};
  const classNames = [
    `${classNameBase} `,
    `${classNameBase}--${size} `,
    `${classNameBase}--${isValidColor(colorScheme) ? 'custom-color' : colorScheme} `,
    `${!hasContent ? `${classNameBase}--empty ` : ''}`,
    `${inverse ? `${classNameBase}--is-inverse ` : ''}`,
    `${hasIcon ? `${classNameBase}--has-icon ` : ''}`,
    `${hasAbsolutePosition ? `${classNameBase}--absolute ` : ''}`,
    `${hasContent && !hasLongText ? `${classNameBase}--circular ` : ''}`,
    className && `${className}`,
  ]
    .join('')
    .trim();
  return (
    <Component
      {...nativeProps}
      className={classNames}
      title={tooltip}
      style={{
        ...customColorStyles,
        ...style,
      }}
    >
      {children}
    </Component>
  );
};
