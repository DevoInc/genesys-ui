import * as React from 'react';

import type {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';

import {
  StyledDecoratorBar,
  type StyledDecoratorBarProps,
} from './StyledDecoratorBar';

export interface DecoratorBarProps
  extends StyledDecoratorBarProps,
    IStyledPolymorphic,
    IStyledOverloadCss {}

export const DecoratorBar: React.FC<DecoratorBarProps> = ({
  as,
  direction = 'vertical',
  size = '100%',
  style,
}) => {
  return (
    <StyledDecoratorBar
      aria-hidden={true}
      as={as}
      css={style}
      direction={direction}
      size={size}
    />
  );
};
