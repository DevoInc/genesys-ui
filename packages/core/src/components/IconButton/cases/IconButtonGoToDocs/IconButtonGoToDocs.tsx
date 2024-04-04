import * as React from 'react';
import { concat } from 'lodash';
import { css, useTheme } from 'styled-components';

import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';
import { STATUS_ICON_MAP } from '../../../../constants';

import { IconButton, type IconButtonProps } from '../../IconButton';

import { Box } from '../../../Box';
import { getMarkerSize } from './utils';
import { GIAngleUp } from '@devoinc/genesys-icons';
import { Icon } from '../../../Icon';
import { iconButtonStatusMixin } from '../IconButtonStatus/mixins';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IconButtonGoToDocsProps
  extends Omit<
    IconButtonProps,
    | 'aria-expanded'
    | 'aria-haspopup'
    | 'aria-selected'
    | 'autoFocus'
    | 'badgeText'
    | 'children'
    | 'colorScheme'
    | 'download'
    | 'form'
    | 'formAction'
    | 'hasBadge'
    | 'icon'
    | 'circular'
    | 'hasDropdown'
    | 'hasBoldIcon'
    | 'wide'
    | 'onChange'
    | 'selectionScheme'
    | 'type'
    | 'value'
  > {}

export const IconButtonGoToDocs = React.forwardRef<
  HTMLElement,
  IconButtonGoToDocsProps
>(
  (
    {
      as = 'a',
      rel = 'noreferrer noopener',
      size = 'md',
      state = 'enabled',
      styles,
      target = '_blank',
      ...restIconButtonProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const markerTokens = theme.cmp.iconButtonGoToDocs.marker;
    const markerSize =
      size && getMarkerSize({ tokens: markerTokens, size }).fontSize;
    const offset = size && getMarkerSize({ tokens: markerTokens, size }).offset;
    const offsetHovered =
      size && getMarkerSize({ tokens: markerTokens, size }).offsetHovered;
    const hoveredMixin = css`
      transition: all 0.2s ease;
      &:hover > *:last-child,
      &:focus > *:last-child,
      &:active > *:last-child {
        top: ${offsetHovered};
        right: ${offsetHovered};
      }
    `;
    return (
      <IconButton
        {...restIconButtonProps}
        as={as}
        rel={rel}
        target={target}
        colorScheme={'help'}
        icon={STATUS_ICON_MAP.filled.help}
        circular
        ref={ref}
        size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
        styles={concat(
          iconButtonStatusMixin({
            state,
            colorScheme: 'help',
            theme,
          }),
          hoveredMixin,
          styles,
        )}
      >
        <Box
          as="span"
          position="absolute"
          positionTop={offset}
          positionRight={offset}
        >
          <Icon strong>
            <GIAngleUp
              size={markerSize}
              style={{
                transform: 'rotate(45deg)',
                transition: 'all 0.2s ease',
              }}
            />
          </Icon>
        </Box>
      </IconButton>
    );
  },
);

IconButtonGoToDocs.displayName = 'IconButtonGoToDocs';
