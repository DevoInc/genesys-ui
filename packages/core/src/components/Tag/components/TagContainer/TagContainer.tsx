import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyleAttr,
  IPolymorphic,
  IClassName,
} from '../../../../declarations';
import type { ITag } from '../../declarations';
import { TAG_CLASS_NAME_BASE } from '../../constants';
import { getAccTextColor, isValidColor } from '../../../../helpers';

export interface TagContainerProps
  extends IPolymorphic,
    IStyleAttr,
    IClassName,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    ITag {
  children?: React.ReactNode;
}

export const TagContainer: React.FC<TagContainerProps> = ({
  as: Component = 'span',
  children,
  className,
  colorScheme = 'neutral',
  bold,
  quiet,
  wide,
  size = 'md',
  style,
  tooltip,
  ...restNativeProps
}) => {
  const classNameBase = TAG_CLASS_NAME_BASE;
  const customColorStyles = isValidColor(colorScheme)
    ? {
        backgroundColor: colorScheme,
        color: getAccTextColor(colorScheme, '#fff', '#222'),
      }
    : null;
  const classNames = [
    `${classNameBase} `,
    `${classNameBase}--${size} `,
    `${classNameBase}--${isValidColor(colorScheme) ? 'custom-color' : colorScheme} `,
    `${bold ? `${classNameBase}--bold ` : ''}`,
    `${quiet ? `${classNameBase}--quiet ` : ''}`,
    `${wide ? `${classNameBase}--wide ` : ''}`,
    `${className} `,
  ]
    .join('')
    .trim();
  return (
    <Component
      {...restNativeProps}
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
