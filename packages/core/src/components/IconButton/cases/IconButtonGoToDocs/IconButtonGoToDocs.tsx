import * as React from 'react';

import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';

import { IconButton, IconButtonProps } from '../../';

import { StyledIconButtonGoToDocs } from './StyledIconButtonGoToDocs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IconButtonGoToDocsProps
  extends Omit<
    IconButtonProps,
    | 'aria-expanded'
    | 'aria-haspopup'
    | 'aria-selected'
    | 'autoFocus'
    | 'as'
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
    | 'state'
    | 'type'
    | 'value'
  > {}

export const IconButtonGoToDocs = React.forwardRef<
  HTMLElement,
  IconButtonGoToDocsProps
>(
  (
    {
      forwardedAs,
      rel = 'noreferrer noopener',
      size = 'md',
      target = '_blank',
      ...restIconButtonProps
    },
    ref
  ) => {
    return (
      <IconButton
        {...restIconButtonProps}
        rel={rel}
        target={target}
        as={StyledIconButtonGoToDocs}
        colorScheme={'help'}
        forwardedAs={forwardedAs || 'a'}
        icon="about_question_faq_help_filled"
        circular
        ref={ref}
        size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
      />
    );
  }
);

IconButtonGoToDocs.displayName = 'IconButtonGoToDocs';
