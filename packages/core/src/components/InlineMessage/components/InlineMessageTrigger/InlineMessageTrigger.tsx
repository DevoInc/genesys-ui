import * as React from 'react';
import { useTheme } from 'styled-components';

import { IconButtonStatus, IconButtonStatusProps } from '../../../IconButton';
import { Typography } from '../../../Typography';
import { useAddPropsToChildren } from '../../../../hooks';
import { Button, ButtonExpandableState, ButtonSize } from '../../../Button';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  TextBoxAriaProps,
  TriggerAriaProps,
} from '../../../../';
import {
  inlineMessageTriggerMixin,
  inlineMessageTriggerParagraphMixin,
} from './helpers';

export interface InlineMessageTriggerProps
  extends Omit<GlobalAttrProps, 'role'>,
    GlobalAriaProps,
    Pick<TextBoxAriaProps, 'aria-activedescendant'>,
    Pick<
      TriggerAriaProps,
      'aria-expanded' | 'aria-controls' | 'aria-haspopup'
    > {
  icon?: string;
  onClick?: () => void;
  size?: ButtonSize;
  state: ButtonExpandableState;
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
    },
    ref
  ) => {
    const TriggerCmp = useAddPropsToChildren(Trigger, {
      'aria-controls': ariaControls,
      id,
      onClick: onClick,
      ref: ref,
      size: size,
      tooltip,
      type: 'button',
    });
    const theme = useTheme();
    if (text || secondaryText) {
      return (
        <Button
          aria-activedescendant={ariaActiveDescendant}
          aria-controls={ariaControls}
          id={id}
          onClick={onClick}
          ref={ref}
          state={state}
          type="button"
          styles={inlineMessageTriggerMixin({ theme })}
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
              gutterBottom="0"
              truncateLine={1}
              size={size}
              styles={inlineMessageTriggerParagraphMixin({ state })}
            >
              {text}
            </Typography.Paragraph>
          )}
          {secondaryText && (
            <Typography.Paragraph
              as="span"
              colorScheme={'weak'}
              gutterBottom="0"
              truncateLine={1}
              size={size}
              styles={inlineMessageTriggerParagraphMixin({ state })}
            >
              {secondaryText}
            </Typography.Paragraph>
          )}
        </Button>
      );
    }

    {
      Trigger && TriggerCmp;
    }

    return (
        <IconButtonStatus
          aria-controls={ariaControls}
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
  }
);

InlineMessageTrigger.displayName = 'InlineMessageTrigger';
