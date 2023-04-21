import * as React from 'react';
import { useTheme } from 'styled-components';

// components
import { Flex } from '../../Flex';
import { StyledInputControlProps } from '../styled';
import { StyledOverloadCssProps } from '../../../declarations';

export interface InputControlInnerContainerProps
  extends Pick<StyledInputControlProps, 'inputWidth'>,
    StyledOverloadCssProps {
  children: React.ReactNode;
}

export const InputControlInnerContainer: React.FC<
  InputControlInnerContainerProps
> = ({ children, inputWidth, styles }) => {
  const theme = useTheme();
  return (
    <Flex
      flex={
        inputWidth
          ? `0 1 ${theme.alias.fields.size.width[inputWidth]}`
          : '1 1 100%'
      }
      position="relative"
      styles={styles}
      width={inputWidth ? theme.alias.fields.size.width[inputWidth] : '100%'}
    >
      {children}
    </Flex>
  );
};
