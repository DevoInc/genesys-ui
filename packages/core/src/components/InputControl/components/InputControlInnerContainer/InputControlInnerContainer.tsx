import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex } from '../../../Flex';
import type {
  IStyledOverloadCss,
  TControlWidth,
} from '../../../../declarations';

export interface InputControlInnerContainerProps extends IStyledOverloadCss {
  /** Width of the input control based in predefined values as 'xxs', 'xs',
   * 'sm'... etc. or directly in a css value. It should reflect the length of
   * the content you expect the user to enter. */
  inputWidth?: TControlWidth;
  children: React.ReactNode;
}

export const InputControlInnerContainer: React.FC<
  InputControlInnerContainerProps
> = ({ children, inputWidth, style }) => {
  const inputWidthEval =
    useTheme().cmp.inputControl.size.width[inputWidth] || inputWidth;
  return (
    <Flex
      flex={inputWidth ? `0 1 ${inputWidthEval}` : '1 1 100%'}
      position="relative"
      style={style}
      width={inputWidthEval || '100%'}
    >
      {children}
    </Flex>
  );
};
