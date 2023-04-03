import * as React from 'react';
import { useTheme } from 'styled-components';
import { AllHTMLAttributes } from 'react';

import { BadgeColorScheme } from '../../../Badge';

import { getTranslate } from './utils';

import { Badge, BadgeSize } from '../../../Badge';
import { Box } from '../../../Box';

export interface ButtonBadgeProps<T = Element> {
  /** ColorScheme and status */
  colorScheme?: BadgeColorScheme;
  /** If the button parent is circular */
  hasCircularParent?: boolean;
  id?: AllHTMLAttributes<T>['id'];
  /** Sets padding, line-height, font-size, etc. */
  size?: BadgeSize;
  /** Badge text */
  text?: string;
}

export const ButtonBadge: React.FC<ButtonBadgeProps> = ({
  colorScheme = 'neutral',
  hasCircularParent = false,
  id,
  size = 'sm',
  text,
}) => {
  const tokens = useTheme();
  return (
    <Box
      position="absolute"
      positionTop="0"
      positionLeft="100%"
      cssTranslate={getTranslate({
        hasCircularParent,
        size,
        tokens: tokens.cmp.badge,
        text,
      })}
    >
      <Badge
        colorScheme={colorScheme}
        id={id ? `button-badge-${id}` : null}
        inverse
        size={size}
        text={text}
      />
    </Box>
  );
};
