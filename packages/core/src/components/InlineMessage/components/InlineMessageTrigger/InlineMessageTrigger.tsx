import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  IconButtonStatus,
  type IconButtonStatusProps,
} from '../../../IconButton';
import { Typography } from '../../../Typography';
import { useAddPropsToChildren } from '../../../../hooks';
import {
  Button,
  type TButtonExpandableState,
  TButtonSize,
} from '../../../Button';
import type {
  IGlobalAriaAttrs,
  ITextBoxAriaAttrs,
  ITriggerAriaAttrs,
} from '../../../../declarations/ariaAttrs';
import type {
  IDataAttrs,
  IGlobalAttrs,
} from '../../../../declarations/htmlAttrs';
import type { ITriggerEventAttrs } from '../../../../declarations/htmlEventAttrs';
import {
  inlineMessageTriggerMixin,
  inlineMessageTriggerParagraphMixin,
} from './helpers';

export interface InlineMessageTriggerProps
  extends IDataAttrs,
    Omit<IGlobalAttrs, 'role'>,
    IGlobalAriaAttrs,
    Pick<ITextBoxAriaAttrs, 'aria-activedescendant'>,
    Pick<
      ITriggerAriaAttrs,
      'aria-expanded' | 'aria-controls' | 'aria-haspopup'
    > {
  icon?: React.ReactNode;
  onClick?: ITriggerEventAttrs['onClick'];
  size?: TButtonSize;
  state: TButtonExpandableState;
  status?: IconButtonStatusProps['colorScheme'];
  secondaryText?: string;
  text?: string;
  title?: string;
  Trigger?: React.ReactNode;
}

export const InlineMessageTrigger = React.forwardRef<
  HTMLButtonElement,
  InlineMessageTriggerProps
>(
  (
    {
      'aria-controls': ariaControls,
      'aria-expanded': ariaExpanded,
      'aria-haspopup': ariaHasPopup,
      'aria-activedescendant': ariaActiveDescendant,
      icon,
      id,
      onClick,
      size = 'md',
      state = 'enabled',
      status,
      secondaryText,
      text,
      tooltip,
      Trigger,
      ...restDataProps
    },
    ref,
  ) => {
    const TriggerCmp = useAddPropsToChildren(Trigger, {
      'aria-controls': ariaControls,
      'aria-expanded': ariaExpanded,
      'aria-haspopup': ariaHasPopup,
      id,
      onClick: onClick,
      ref: ref,
      size: size,
      state,
      tooltip,
      type: 'button',
    });
    const theme = useTheme();
    if (text || secondaryText) {
      return (
        <Button
          {...restDataProps}
          aria-activedescendant={ariaActiveDescendant}
          aria-controls={ariaControls}
          aria-expanded={ariaExpanded}
          aria-haspopup={ariaHasPopup}
          id={id}
          onClick={onClick}
          ref={ref}
          state={state}
          type="button"
          style={inlineMessageTriggerMixin({ theme })}
        >
          {Trigger || (
            <IconButtonStatus
              colorScheme={status}
              as="span"
              icon={icon}
              state={state}
              size={size}
              tooltip={tooltip}
            />
          )}
          {text && (
            <Typography.Paragraph
              as="span"
              colorScheme={'strong'}
              truncateLine={1}
              size={size}
              style={inlineMessageTriggerParagraphMixin({ state })}
            >
              {text}
            </Typography.Paragraph>
          )}
          {secondaryText && (
            <Typography.Paragraph
              as="span"
              colorScheme={'weak'}
              truncateLine={1}
              size={size}
              style={inlineMessageTriggerParagraphMixin({ last: true, state })}
            >
              {secondaryText}
            </Typography.Paragraph>
          )}
        </Button>
      );
    }

    if (Trigger) {
      return TriggerCmp;
    }

    return (
      <IconButtonStatus
        {...restDataProps}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-haspopup={ariaHasPopup}
        colorScheme={status}
        icon={icon}
        id={id}
        onClick={onClick}
        ref={ref}
        size={size}
        state={state}
        tooltip={tooltip}
        type="button"
      />
    );
  },
);

InlineMessageTrigger.displayName = 'InlineMessageTrigger';
