import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import styled, { css } from 'styled-components';
import { BaseStyledProgressBarProps } from './declarations';

export interface StyledProgressBarContainerProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<BaseStyledProgressBarProps, 'wide' | 'margin' | 'padding'> {}
export const StyledProgressBarContainer = styled.div<StyledProgressBarContainerProps>`
  ${({ margin, padding, wide }) => css`
    width: ${wide && '100%'};
    position: relative;
    margin: ${margin};
    padding: ${padding};
  `};
`;
