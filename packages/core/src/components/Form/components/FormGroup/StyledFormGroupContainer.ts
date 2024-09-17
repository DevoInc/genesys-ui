import styled, { css, CSSProp } from 'styled-components';

import type { FlexProps } from '../../../Flex';
import { getSpacingPropCss } from '../../../../helpers';
import { formGroupSpacingMixin } from '../../helpers';

export interface StyledFormGroupContainerProps {
  $marginLeft?: FlexProps['marginLeft'];
  $marginTop?: FlexProps['marginTop'];
  /** It defines if the group is rendered as a fieldset, and therefore it can
   * get its related html attributes.*/
  $asFieldset?: boolean;
  /** The position of the legend relative to the group. */
  $legendPosition?: 'top' | 'left';
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}

export const StyledFormGroupContainer = styled.div<StyledFormGroupContainerProps>`
  display: flex;
  position: relative;
  &:first-child {
    margin-top: 0;
  }
  ${({ $asFieldset, $legendPosition, $marginLeft, $marginTop, theme }) => {
    return css`
      flex-direction: ${$legendPosition === 'left' ? 'row' : 'column'};
      align-items: ${$legendPosition === 'left' ? 'center' : 'stretch'};
      gap: ${getSpacingPropCss(theme)('cmp-xs')};
      margin-top: ${$marginTop || formGroupSpacingMixin(theme)};
      margin-left: ${$marginLeft && getSpacingPropCss(theme)($marginLeft)};
      ${$asFieldset &&
      css`
        min-width: 0;
      `}
    `;
  }}
`;