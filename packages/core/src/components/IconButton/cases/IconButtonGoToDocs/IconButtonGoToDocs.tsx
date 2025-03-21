import * as React from 'react';
import { css, useTheme } from 'styled-components';

import type { Resolve } from '../../../../typeFunctions';
import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';
import { STATUS_ICON_MAP } from '../../../../constants';
import { IconButton, type IconButtonProps } from '../../IconButton';
import { Box } from '../../../Box';
import { getMarkerSize } from './utils';
import { GIAngleUp } from '@devoinc/genesys-icons';
import { Icon } from '../../../Icon';
import { iconButtonStatusMixin } from '../IconButtonStatus/mixins';
import { mergeStyles } from '../../../../helpers';

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

export const IconButtonGoToDocs: React.FC<Resolve<IconButtonGoToDocsProps>> = ({
  as = 'a',
  rel = 'noreferrer noopener',
  size = 'md',
  state = 'enabled',
  style,
  target = '_blank',
  ...restIconButtonProps
}) => {
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
      size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
      style={mergeStyles(
        iconButtonStatusMixin({
          state,
          colorScheme: 'help',
          theme,
        }),
        hoveredMixin,
        style,
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
};
