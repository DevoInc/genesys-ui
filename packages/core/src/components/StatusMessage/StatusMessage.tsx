import * as React from 'react';

import type { TGlobalStatus } from '../../declarations/commonProps';
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

export interface StatusMessageProps
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
  icon?: React.ReactNode;
  /** If it's true then the content box is not centered and it's scrollable */
  hasLongMessage?: boolean;
  /** The status of the message: error, warning... etc. */
  status?: TGlobalStatus;
}

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
  title,
  tooltip,
  width,
}: StatusMessageProps) => {
  if (buttons) {
    buttons = Array.isArray(buttons) ? buttons : [buttons];
  }

  return (
    <StatusMessageContainer
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
      styles={styles}
      tooltip={tooltip}
      width={width}
    >
      <StatusMessageIcon
        colorScheme={status === 'base' ? 'stronger' : status}
        size={iconSize}
      >
        {icon}
      </StatusMessageIcon>
      {title && <StatusMessageTitle>{title}</StatusMessageTitle>}
      {description && (
        <StatusMessageDescription isLong={hasLongMessage}>
          {description}
        </StatusMessageDescription>
      )}
      {Array.isArray(buttons) && (
        <StatusMessageButtons>{buttons}</StatusMessageButtons>
      )}
    </StatusMessageContainer>
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
