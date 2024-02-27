import * as React from 'react';

import { ChipContainerProps } from '../components/ChipContainer';

import { StyledChipLabel } from '../styled';

export interface ChipContentProps extends Pick<ChipContainerProps, 'styles'> {
  children: React.ReactNode;
}

export const ChipContent: React.FC<ChipContentProps> = ({
  children,
  styles,
}) => {
  return <StyledChipLabel css={styles}>{children}</StyledChipLabel>;
};
