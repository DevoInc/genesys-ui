import * as React from 'react';
import { useTheme } from 'styled-components';
import { GICheckThick } from '@devoinc/genesys-icons';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';

import {
  BadgeContainer,
  type BadgeContainerProps,
  BadgeIcon,
  BadgeText,
} from './components';
import { Icon } from '../Icon';

export interface BadgeProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    BadgeContainerProps {
  /** Defines if the Badge icon is bold */
  hasBoldIcon?: boolean;
  /** Text for the Badge (it shouldn't be longer than 2 characters) */
  text?: string | number;
  /** Tooltip on Badge hover.*/
  tooltip?: string;
  /** Icon as content of the badge.*/
  icon?: React.ReactNode;
}

export const InternalBadge: React.FC<BadgeProps> = ({
  colorScheme = 'neutral',
  hasAbsolutePosition = false,
  hasBoldIcon = false,
  icon,
  inverse = false,
  size = 'md',
  text,
  tooltip,
  style,
  ...nativeProps
}) => {
  const theme = useTheme();
  return (
    <BadgeContainer
      {...nativeProps}
      colorScheme={colorScheme}
      hasAbsolutePosition={hasAbsolutePosition}
      inverse={inverse}
      size={size}
      style={style}
      tooltip={tooltip}
    >
      {!text && icon && (
        <Icon
          strong={hasBoldIcon}
          size={theme.cmp.badge.icon.size.square[size]}
        >
          {icon || <GICheckThick />}
        </Icon>
      )}
      {text && <Badge._Text>{text}</Badge._Text>}
    </BadgeContainer>
  );
};

export const Badge = InternalBadge as typeof InternalBadge & {
  _Container: typeof BadgeContainer;
  _Icon: typeof BadgeIcon;
  _Text: typeof BadgeText;
};

Badge._Container = BadgeContainer;
Badge._Icon = BadgeIcon;
Badge._Text = BadgeText;

InternalBadge.displayName = 'Badge';
Badge._Container.displayName = 'Badge._Container';
Badge._Icon.displayName = 'Badge._Icon';
Badge._Text.displayName = 'Badge._Text';
