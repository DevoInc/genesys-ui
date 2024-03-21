import * as React from 'react';
import { useTheme } from 'styled-components';

// components
import { Flex } from '../../Flex';
import { StyledInputControlProps } from '../styled';
import { IStyledOverloadCss } from '../../../declarations';

export interface InputControlInnerContainerProps
  extends IStyledOverloadCss,
    Pick<StyledInputControlProps, 'inputWidth'> {
  children: React.ReactNode;
}

export const InputControlInnerContainer: React.FC<
  InputControlInnerContainerProps
> = ({ children, inputWidth, styles }) => {
  const theme = useTheme();
  const inputWidthEval =
    theme.alias.fields.size.width[inputWidth] || inputWidth;
  return (
    <Flex
      flex={inputWidth ? `0 1 ${inputWidthEval}` : '1 1 100%'}
      position="relative"
      styles={styles}
      width={inputWidthEval || '100%'}
    >
      {children}
    </Flex>
  );
};
