import * as React from 'react';

import type {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';

import { StyledDecoratorBar } from './StyledDecoratorBar';
import type { IDecoratorBar } from './declarations';

export interface DecoratorBarProps
  extends IDecoratorBar,
    IStyledPolymorphic,
    IStyledOverloadCss {}

export const DecoratorBar: React.FC<DecoratorBarProps> = ({
  as,
  direction = 'vertical',
  size = '100%',
  style,
}) => (
  <StyledDecoratorBar
    aria-hidden={true}
    as={as}
    css={style}
    $direction={direction}
    $size={size}
  />
);
