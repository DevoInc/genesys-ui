import * as React from 'react';

import {
  StyledDecoratorBar,
  StyledDecoratorBarProps,
} from './StyledDecoratorBar';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DecoratorBarProps extends StyledDecoratorBarProps {}

export const DecoratorBar: React.FC<DecoratorBarProps> = ({
  direction = 'vertical',
  size = '100%',
}) => {
  return (
    <StyledDecoratorBar direction={direction} size={size} aria-hidden={true} />
  );
};
