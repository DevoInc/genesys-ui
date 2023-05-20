import styled, { css } from 'styled-components';

import { LABEL_COLOR } from '../../../constants';

import { StepperStatus, StepperSize } from '../../../declarations';

import { typoMixin, typoColorMixin } from '../../../../../styled';

export interface StyledStepperItemContentProps {
  size?: StepperSize;
  status: StepperStatus;
}

export const StyledStepperItemContent = styled.span<StyledStepperItemContentProps>`
  ${({ size, status, theme }) => css`
    ${typoMixin({ size, theme, variant: 'action' })};
    ${typoColorMixin({ colorScheme: LABEL_COLOR[status], theme })};
  `};
`;
