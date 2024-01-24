import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';

import { BadgeContainer, BadgeContainerProps, BadgeText } from './components';
import { Icon } from '../Icon';

export interface BadgeProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps,
    BadgeContainerProps {
  /** Defines if the Badge icon is bold */
  hasBoldIcon?: boolean;
  /** Text for the Badge (it shouldn't be longer than 2 characters) */
  text?: string;
  /** Tooltip on Badge hover.*/
  tooltip?: string;
  /** Icon as content of the badge.*/
  icon?: string;
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
          iconId={icon || 'gi-check_thick'}
          strong={hasBoldIcon}
          size={theme.cmp.badge.icon.size.square[size]}
        />
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
