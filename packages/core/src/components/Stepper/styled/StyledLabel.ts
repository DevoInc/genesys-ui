import styled, { css } from 'styled-components';

import { typoMixin, typoColorMixin } from '../../../styled/mixins/baseMixins';
import { StepperStatus, StepperSize } from '../declarations';
import { LABEL_COLOR } from '../constants';

interface StyledLabelProps {
  size?: StepperSize;
  status: StepperStatus;
}

export const StyledLabel = styled.span<StyledLabelProps>`
  ${({ size, status, theme }) => css`
    ${typoMixin({ size, theme, variant: 'action' })};
    ${typoColorMixin({ colorScheme: LABEL_COLOR[status], theme })};
  `};
`;
