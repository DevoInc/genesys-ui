import * as React from 'react';

import { ButtonGroup, type ButtonGroupProps } from '../../ButtonGroup';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StatusMessageButtonsProps extends ButtonGroupProps {}

export const StatusMessageButtons: React.FC<StatusMessageButtonsProps> = ({
  children,
  ...buttonGroupProps
}) => <ButtonGroup {...buttonGroupProps}>{children}</ButtonGroup>;
