import * as React from 'react';

import { IconButtonStatus, IconButtonStatusProps } from '../../../IconButton';
import { Flex } from '../../../Flex';
import { Typography } from '../../../Typography';
import { useAddPropsToChildren } from '../../../../hooks';
import {
  StyledInlineMessageTrigger,
  StyledInlineMessageTriggerProps,
} from './StyledInlineMessageTrigger';
import { ButtonSize } from '../../../Button';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  TextBoxAriaProps,
  TriggerAriaProps,
} from '../../../../';

export interface InlineMessageTriggerProps
  extends Omit<GlobalAttrProps, 'role'>,
    GlobalAriaProps,
    Pick<TextBoxAriaProps, 'aria-activedescendant'>,
    Pick<TriggerAriaProps, 'aria-expanded' | 'aria-controls' | 'aria-haspopup'>,
    StyledInlineMessageTriggerProps {
  icon?: string;
  onClick?: () => void;
  size?: ButtonSize;
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
      title,
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
      title,
      type: 'button',
    });
    if (text || secondaryText) {
      return (
        <StyledInlineMessageTrigger
          aria-activedescendant={ariaActiveDescendant}
          aria-controls={ariaControls}
          id={id}
          onClick={onClick}
          ref={ref}
          state={state}
          type="button"
        >
          {Trigger || (
            <IconButtonStatus
              forwardedAs="span"
              icon={icon}
              state={state}
              size={size}
              title={title}
              colorScheme={status}
            />
          )}
          {text && (
            <Flex.Item as="span" marginLeft="cmp-xxs">
              <Typography.Paragraph
                as="span"
                colorScheme={'strong'}
                truncateLine={1}
                size={size}
              >
                {text}
              </Typography.Paragraph>
            </Flex.Item>
          )}
          {secondaryText && (
            <Flex.Item as="span" marginLeft="cmp-xxs">
              <Typography.Paragraph
                as="span"
                colorScheme={'weak'}
                truncateLine={1}
                size={size}
              >
                {secondaryText}
              </Typography.Paragraph>
            </Flex.Item>
          )}
        </StyledInlineMessageTrigger>
      );
    }

    if (Trigger) {
      return <>{TriggerCmp}</>;
    }

    return (
      <span ref={ref}>
        <IconButtonStatus
          aria-controls={ariaControls}
          colorScheme={status}
          icon={icon}
          id={id}
          onClick={onClick}
          size={size}
          state={state}
          title={title}
          type="button"
        />
      </span>
    );
  }
);

InlineMessageTrigger.displayName = 'InlineMessageTrigger';
