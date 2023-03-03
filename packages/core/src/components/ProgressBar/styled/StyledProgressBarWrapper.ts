import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import styled, { css } from 'styled-components';

import { flexMixin } from '../../../styled/mixins/utilsMixins';
import { BaseStyledProgressBarProps } from './declarations';

export interface StyledProgressBarWrapperProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<BaseStyledProgressBarProps, 'typeProp'> {}

export const StyledProgressBarWrapper = styled.div<StyledProgressBarWrapperProps>`
  ${({ typeProp }) => css`
    position: relative;
    ${flexMixin({
      dis: 'flex',
      dir: typeProp === 'circular' ? 'column' : 'row',
      jc: typeProp === 'circular' ? 'center' : 'space-between',
      ai: 'center',
      wrap: 'wrap',
    })};
  `}
`;
