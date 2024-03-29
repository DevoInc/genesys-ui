import styled, { css } from 'styled-components';

import type { FlexProps } from '../../Flex';

import type { IGlobalAriaAttrs } from '../../../declarations/ariaAttrs';
import type {
  IFieldAttrs,
  IGlobalAttrs,
} from '../../../declarations/htmlAttrs';

import type { IStyledPolymorphic } from '../../../declarations/styled';

import { getSpacingPropCss } from '../../../helpers';
import { formGroupSpacingMixin } from './helpers';

export interface StyledFormGroupContainerProps
  extends IStyledPolymorphic,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    Pick<FlexProps, 'marginLeft' | 'marginTop'>,
    Omit<IFieldAttrs, 'required'> {
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
      margin-top: ${marginTop || formGroupSpacingMixin(theme)};
      margin-left: ${marginLeft && getSpacingPropCss(theme)(marginLeft)};

      &:first-child {
        margin-top: 0;
      }

      ${asFieldset &&
      css`
        min-width: 0;
      `}
    `;
  }}
`;
