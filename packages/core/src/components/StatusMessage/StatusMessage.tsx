import * as React from 'react';

import type { GlobalStatus } from '../../declarations/commonProps';
import type { StyledOverloadCssPropsWithRecord } from '../../declarations/styled';
import type { ButtonGroupProps } from '../ButtonGroup';
import type { IconProps } from '../Icon';

import {
  StatusMessageButtons,
  StatusMessageContainer,
  StatusMessageContainerProps,
  StatusMessageDescription,
  StatusMessageIcon,
  StatusMessageTitle,
} from './components';

export interface BaseStatusMessageProps
  extends Omit<StatusMessageContainerProps, 'children'> {
  /** This property defines the font size of the icon */
  iconSize?: IconProps['size'];
  /** Title block of the status message */
  title: React.ReactNode;
  /** Description block of status message */
  description?: React.ReactNode;
  /** Buttons of the status message */
  buttons: ButtonGroupProps['children'];
  /** Icon for the top of the panel */
  icon?: string;
  /** If it's true then the content box is not centered and it's scrollable */
  hasLongMessage?: boolean;
  /** The status of the message: error, warning... etc. */
  status?: GlobalStatus;
}

export type StatusMessageProps = BaseStatusMessageProps &
  StyledOverloadCssPropsWithRecord<
    'container' | 'title' | 'icon' | 'description' | 'buttons'
  >;

export const InternalStatusMessage = ({
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  as,
  bordered,
  buttons,
  description,
  hasLongMessage,
  height,
  icon,
  iconSize = '3.6rem',
  id,
  margin,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  padding = 'cmp-md',
  role,
  status,
  styles,
  subcomponentStyles,
  title,
  tooltip,
  width,
}: StatusMessageProps) => {
  if (buttons) {
    buttons = Array.isArray(buttons) ? buttons : [buttons];
  }

  return (
    <StatusMessage.Container
      aria-describedby={ariaDescribedBy}
      aria-details={ariaDetails}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      as={as}
      bordered={bordered}
      height={height}
      id={id}
      margin={margin}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      padding={padding}
      role={role}
      styles={subcomponentStyles?.container || styles}
      tooltip={tooltip}
      width={width}
    >
      <StatusMessage.Icon
        colorScheme={status === 'base' ? 'stronger' : status}
        iconId={icon}
        size={iconSize}
        styles={subcomponentStyles?.icon}
      />
      {title && (
        <StatusMessage.Title styles={subcomponentStyles?.title}>
          {title}
        </StatusMessage.Title>
      )}
      {description && (
        <StatusMessage.Description
          isLong={hasLongMessage}
          styles={subcomponentStyles?.description}
        >
          {description}
        </StatusMessage.Description>
      )}
      {Array.isArray(buttons) && (
        <StatusMessage.Buttons styles={subcomponentStyles?.buttons}>
          {buttons}
        </StatusMessage.Buttons>
      )}
    </StatusMessage.Container>
  );
};

export const StatusMessage =
  InternalStatusMessage as typeof InternalStatusMessage & {
    Buttons: typeof StatusMessageButtons;
    Container: typeof StatusMessageContainer;
    Description: typeof StatusMessageDescription;
    Icon: typeof StatusMessageIcon;
    Title: typeof StatusMessageTitle;
  };

StatusMessage.Buttons = StatusMessageButtons;
StatusMessage.Container = StatusMessageContainer;
StatusMessage.Description = StatusMessageDescription;
StatusMessage.Icon = StatusMessageIcon;
StatusMessage.Title = StatusMessageTitle;
