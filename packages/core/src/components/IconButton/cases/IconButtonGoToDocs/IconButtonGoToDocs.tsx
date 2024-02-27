import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';
import { STATUS_ICON_MAP } from '../../../../constants';

import { IconButton, IconButtonProps } from '../../IconButton';

import { iconButtonGoToDocsMixin } from './helpers';

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
        styles={concat(iconButtonGoToDocsMixin({ size, state, theme }), styles)}
      />
    );
  },
);

IconButtonGoToDocs.displayName = 'IconButtonGoToDocs';
