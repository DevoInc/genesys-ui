import styled, { css } from 'styled-components';

import {
  FlexProps,
  FieldAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../../';

import { getSpacingPropCss } from '../../../utils/spacing';

export interface StyledFormGroupContainerProps
  extends StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps,
    Pick<FlexProps, 'marginLeft' | 'marginTop'>,
    Omit<FieldAttrProps, 'required'> {
  /** The position of the legend relative to the group. */
  legendPosition?: 'top' | 'left';
}

export const StyledFormGroupContainer = styled.div<StyledFormGroupContainerProps>`
  ${({ legendPosition, marginLeft, marginTop, theme }) => {
    return css`
      display: flex;
      flex-direction: ${legendPosition === 'left' ? 'row' : 'column'};
      align-items: ${legendPosition === 'left' ? 'center' : 'stretch'};
      position: relative;
      gap: ${getSpacingPropCss('cmp-xs', theme)};
      margin-top: ${marginTop && getSpacingPropCss(marginTop, theme)};
      margin-left: ${marginTop && getSpacingPropCss(marginLeft, theme)};
    `;
  }}
`;
