import styled, { css } from 'styled-components';

import { LABEL_COLOR } from '../../../constants';
import type { IStepperItem } from '../declarations';
import { typoMixin, typoColorMixin } from '../../../../../styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledStepperItemContentProps
  extends Pick<IStepperItem, 'size' | 'status'> {}

export const StyledStepperItemContent = styled.span<StyledStepperItemContentProps>`
  ${({ size, status = 'pending', theme }) => css`
    ${typoMixin({ size, theme, variant: 'action' })};
    ${typoColorMixin({ colorScheme: LABEL_COLOR[status], theme })};
  `};
`;
