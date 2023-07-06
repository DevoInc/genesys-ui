import * as React from 'react';

import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';

import {
  StyledDecoratorBar,
  StyledDecoratorBarProps,
} from './StyledDecoratorBar';

export interface DecoratorBarProps
  extends StyledDecoratorBarProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps {}

export const DecoratorBar: React.FC<DecoratorBarProps> = ({
  as,
  direction = 'vertical',
  size = '100%',
  styles,
}) => {
  return (
    <StyledDecoratorBar
      aria-hidden={true}
      as={as}
      css={styles}
      direction={direction}
      size={size}
    />
  );
};
