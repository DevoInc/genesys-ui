import * as React from 'react';
import { GICheckThick } from '@devoinc/genesys-icons';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IPolymorphic,
  IStyleAttr,
} from '../../declarations';

import {
  BadgeContainer,
  type BadgeContainerProps,
  BadgeIcon,
  BadgeText,
} from './components';

export interface BadgeProps
  extends IPolymorphic,
    IStyleAttr,
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
  as = 'span',
  colorScheme = 'neutral',
  hasAbsolutePosition,
  hasBoldIcon,
  icon,
  inverse,
  size = 'md',
  text,
  tooltip,
  style,
  ...nativeProps
}) => {
  const iconSquareSize = `var(--cmp-badge-icon-size-square-${size})`;
  return (
    <BadgeContainer
      {...nativeProps}
      as={as}
      colorScheme={colorScheme}
      hasAbsolutePosition={hasAbsolutePosition}
      hasIcon={Boolean(icon)}
      inverse={inverse}
      size={size}
      style={style}
      tooltip={tooltip}
    >
      {!text && icon && (
        <Badge._Icon strong={hasBoldIcon} size={iconSquareSize}>
          {icon || <GICheckThick />}
        </Badge._Icon>
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
