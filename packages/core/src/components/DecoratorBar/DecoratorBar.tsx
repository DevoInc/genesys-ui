import * as React from 'react';

import {
  StyledDecoratorBar,
  StyledDecoratorBarProps,
} from './StyledDecoratorBar';
import { StyledOverloadCssProps } from '../../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DecoratorBarProps
  extends StyledDecoratorBarProps,
    StyledOverloadCssProps {}

export const DecoratorBar: React.FC<DecoratorBarProps> = ({
  direction = 'vertical',
  size = '100%',
  styles,
}) => {
  return (
    <StyledDecoratorBar
      direction={direction}
      size={size}
      aria-hidden={true}
      css={styles}
    />
  );
};
