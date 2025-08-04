import * as React from 'react';

import { Icon, type IconProps } from '../../../Icon';
import { TAG_ICON_CLASS_NAME_BASE } from '../../constants';

export interface TagIconProps extends IconProps {}

export const TagIcon: React.FC<TagIconProps> = ({
  children,
  className,
  colorScheme,
  size,
  style,
  ...restIconProps
}) => {
  const classNames = [
    `${TAG_ICON_CLASS_NAME_BASE} `,
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
