import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import styled, { css } from 'styled-components';
import { typoMixin } from '../../../styled/mixins/baseMixins';
import { BaseStyledProgressBarProps } from './declarations';

export interface StyledProgressBarPercentProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<BaseStyledProgressBarProps, 'typeProp' | 'progress' | 'size'> {}

export const StyledProgressBarPercent = styled.span<StyledProgressBarPercentProps>`
  ${({ progress, size, typeProp, theme }) => css`
    ${typoMixin({
      variant: 'body',
      size: size,
      theme: theme,
    })};

    ${typeProp === 'circular' &&
    progress === 'complete' &&
    css`
      display: none;
    `}
  `}
`;
