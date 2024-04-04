import * as React from 'react';

import { Button, type ButtonContainerProps } from '../../Button';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IconButtonContainerProps
  extends Omit<ButtonContainerProps, 'squared'> {}

export const IconButtonContainer: React.FC<IconButtonContainerProps> = (
  buttonContainerProps,
) => {
  return <Button._Container {...buttonContainerProps} squared />;
};
