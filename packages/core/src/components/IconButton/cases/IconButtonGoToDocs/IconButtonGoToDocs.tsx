import * as React from 'react';
import { css, useTheme } from 'styled-components';

import type { TGlobalSize } from '../../../../declarations';
import { PickUnion, Resolve } from '../../../../typeFunctions';
import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';
import { STATUS_ICON_MAP } from '../../../../constants';
import { IconButton, type IconButtonProps } from '../../IconButton';
import { getMarkerSize } from './utils';
import { GIAngleUp } from '@devoinc/genesys-icons';
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
    | 'size'
    | 'type'
    | 'value'
  > {
  size?: PickUnion<TGlobalSize, 'xxs' | 'xs' | 'sm' | 'md'>;
}

export const IconButtonGoToDocs = React.forwardRef<
  HTMLButtonElement,
  Resolve<IconButtonGoToDocsProps>
>(
  (
    {
      as = 'a',
      rel = 'noreferrer noopener',
      size = 'md',
      state = 'enabled',
      style,
      target = '_blank',
      ...restIconButtonProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const tokens = theme.cmp.iconButtonGoToDocs.marker;
    const markerSize = size && getMarkerSize({ tokens, size }).fontSize;
    const offset = tokens.size.offset.enabled[size];
    const offsetHovered = tokens.size.offset.hovered[size];

    const positionMixin = css`
      > *:last-child {
        transition: all 0.2s ease;
        top: ${offset};
        right: ${offset};
      }

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
        ref={ref}
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
          positionMixin,
          style,
        )}
      >
        <GIAngleUp
          size={markerSize}
          style={{
            position: 'absolute',
            transform: 'rotate(45deg)',
          }}
        />
      </IconButton>
    );
  },
);
