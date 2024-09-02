import * as React from 'react';

import type { ChipContainerProps } from '../ChipContainer/ChipContainer';
import { StyledChipLabel } from './StyledChipLabel';

export interface ChipContentProps extends Pick<ChipContainerProps, 'style'> {
  children: React.ReactNode;
}

export const ChipContent: React.FC<ChipContentProps> = ({
  children,
  style,
}) => <StyledChipLabel css={style}>{children}</StyledChipLabel>;
