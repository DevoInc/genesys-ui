import * as React from 'react';
import { useTheme } from 'styled-components';

// components
import { Flex, StyledInputControlProps } from '../../';

export interface InputControlInnerContainerProps
  extends Pick<StyledInputControlProps, 'inputWidth'> {
  children: React.ReactNode;
}

export const InputControlInnerContainer: React.FC<
  InputControlInnerContainerProps
> = ({ children, inputWidth }) => {
  const theme = useTheme();
  return (
    <Flex
      flex={
        inputWidth
          ? `0 1 ${theme.alias.fields.size.width[inputWidth]}`
          : '1 1 100%'
      }
      position="relative"
      width={inputWidth ? theme.alias.fields.size.width[inputWidth] : '100%'}
    >
      {children}
    </Flex>
  );
};
