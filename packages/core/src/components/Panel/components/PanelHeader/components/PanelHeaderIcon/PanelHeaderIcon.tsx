import * as React from 'react';

import type { IPanelContainerAttrs } from '../../../../declarations';
import { PANEL_ICON_CLASS_NAME_BASE } from '../../../../constants';
import { Icon, type IconProps } from '../../../../../Icon';

export interface PanelHeaderIconProps
  extends Omit<IconProps, 'iconId' | 'size'>,
    Pick<IPanelContainerAttrs, 'size'> {
  icon: React.ReactNode;
}

export const PanelHeaderIcon: React.FC<PanelHeaderIconProps> = ({
  className,
  icon,
  size = 'md',
  style,
  ...restIconProps
}) => {
  const classNames = [
    `${PANEL_ICON_CLASS_NAME_BASE} `,
    className && `${className} `,
  ]
    .join('')
    .trim();
  return (
    <Icon {...restIconProps} className={classNames} style={style}>
      {icon}
    </Icon>
  );
};
