import styled, { css } from 'styled-components';

import {
  FlexProps,
  FieldAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../../';

import { getSpacingPropCss } from '../../../helpers';

export interface StyledFormGroupContainerProps
  extends StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps,
    Pick<FlexProps, 'marginLeft' | 'marginTop'>,
    Omit<FieldAttrProps, 'required'> {
  /** It defines if the group is rendered as a fieldset, and therefore it can get its related html attributes.*/
  asFieldset?: boolean;
  /** The position of the legend relative to the group. */
  legendPosition?: 'top' | 'left';
}

export const StyledFormGroupContainer = styled.div<StyledFormGroupContainerProps>`
  ${({ asFieldset, legendPosition, marginLeft, marginTop, theme }) => {
  return css`
      display: flex;
      flex-direction: ${legendPosition === 'left' ? 'row' : 'column'};
      align-items: ${legendPosition === 'left' ? 'center' : 'stretch'};
      position: relative;
      gap: ${getSpacingPropCss(theme)('cmp-xs')};
      margin-top: ${marginTop && getSpacingPropCss(theme)(marginTop)};
      margin-left: ${marginTop && getSpacingPropCss(theme)(marginLeft)};

      ${asFieldset &&
      css`
        min-width: 0;
      `}
    `;
}}
`;
