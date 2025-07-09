import * as React from 'react';

import { Icon, type IconProps } from '../../../Icon';
import { TAG_CLASS_NAME_BASE } from '../../constants';

export interface TagIconProps extends IconProps {}

export const TagIcon: React.FC<TagIconProps> = ({
  children,
  className,
  colorScheme = 'neutral',
  size,
  style,
  ...restIconProps
}) => {
  const classNames = [
    `${TAG_CLASS_NAME_BASE}__icon `,
    className && `${className}`,
  ]
    .join('')
    .trim();
  return (
    <Icon
      {...restIconProps}
      colorScheme={colorScheme}
      size={size}
      style={style}
      className={classNames}
    >
      {children}
    </Icon>
  );
};
