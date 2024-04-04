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
  text?: string;
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
  styles,
  ...nativeProps
}) => {
  const theme = useTheme();
  return (
    <Badge._Container
      {...nativeProps}
      colorScheme={colorScheme}
      hasAbsolutePosition={hasAbsolutePosition}
      inverse={inverse}
      size={size}
      styles={styles}
      tooltip={tooltip}
    >
      {!text && icon && (
        <Badge._Icon
          strong={hasBoldIcon}
          size={theme.cmp.badge.icon.size.square[size]}
        >
          {icon || <GICheckThick />}
        </Badge._Icon>
      )}
      {text && <Badge._Text>{text}</Badge._Text>}
    </Badge._Container>
  );
};

export const Badge = InternalBadge as typeof InternalBadge & {
  _Container: typeof BadgeContainer;
  _Icon: typeof Icon;
  _Text: typeof BadgeText;
};

Badge._Container = BadgeContainer;
Badge._Icon = Icon;
Badge._Text = BadgeText;

InternalBadge.displayName = 'Badge';
