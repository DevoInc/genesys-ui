import * as React from 'react';

import { BoxMessageHeadingProps } from './components';
import {
  BoxMessageActions,
  BoxMessageActionsProps,
  BoxMessageClose,
  BoxMessageCloseProps,
  BoxMessageContainer,
  BoxMessageContainerProps,
  BoxMessageContent,
  BoxMessageContentProps,
  BoxMessageHeading,
  BoxMessageIcon,
} from './components';
import { Flex } from '../';

export interface BoxMessageProps
  extends Omit<BoxMessageContainerProps, 'children'>,
    Pick<BoxMessageActionsProps, 'actions'> {
  /** onClick function for close button */
  close?: BoxMessageCloseProps['onClick'];
  /** Tooltip for close button */
  closeTooltip?: BoxMessageCloseProps['tooltip'];
  /** BoxMessage content */
  content?: BoxMessageContentProps['children'];
  /** This prop hides the BoxMessage icon */
  hideIcon?: boolean;
  /** BoxMessage title content */
  title?: BoxMessageHeadingProps['children'];
}

export const InternalBoxMessage: React.FC<BoxMessageProps> = ({
  actions,
  as,
  className,
  close,
  closeTooltip = 'Remove message',
  content,
  hideIcon,
  id,
  role,
  status = 'info',
  styles,
  title,
  tooltip,
  ...ariaProps
}) => {
  return (
    <BoxMessageContainer
      {...ariaProps}
      as={as}
      className={className}
      id={id}
      role={role}
      status={status}
      styles={styles}
      tooltip={tooltip}
    >
      {!hideIcon && (
        <Flex.Item alignSelf="flex-start" flex="0 0 auto">
          <BoxMessageIcon status={status} />
        </Flex.Item>
      )}
      <Flex.Item flex="1 1 auto">
        {title && <BoxMessageHeading>{title}</BoxMessageHeading>}
        {content && <BoxMessageContent>{content}</BoxMessageContent>}
        {actions && <BoxMessageActions actions={actions} status={status} />}
      </Flex.Item>

      {close && <BoxMessageClose onClick={close} tooltip={closeTooltip} />}
    </BoxMessageContainer>
  );
};

export const BoxMessage = InternalBoxMessage as typeof InternalBoxMessage & {
  Actions: typeof BoxMessageActions;
  Close: typeof BoxMessageClose;
  Container: typeof BoxMessageContainer;
  Content: typeof BoxMessageContent;
  Heading: typeof BoxMessageHeading;
  Icon: typeof BoxMessageIcon;
};

BoxMessage.Actions = BoxMessageActions;
BoxMessage.Close = BoxMessageClose;
BoxMessage.Container = BoxMessageContainer;
BoxMessage.Content = BoxMessageContent;
BoxMessage.Heading = BoxMessageHeading;
BoxMessage.Icon = BoxMessageIcon;
