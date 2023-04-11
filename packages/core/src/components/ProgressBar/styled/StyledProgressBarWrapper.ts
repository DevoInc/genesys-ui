import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import styled, { css } from 'styled-components';

import { BaseStyledProgressBarProps } from './declarations';

export interface StyledProgressBarWrapperProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<BaseStyledProgressBarProps, 'typeProp'> {}

export const StyledProgressBarWrapper = styled.div<StyledProgressBarWrapperProps>`
  ${({ typeProp }) => css`
    position: relative;
    display: flex;
    flex-direction: ${typeProp === 'circular' ? 'column' : 'row'};
    jc: ${typeProp === 'circular' ? 'center' : 'space-between'};
    align-items: 'center';
    wrap: 'wrap';
  `}
`;
