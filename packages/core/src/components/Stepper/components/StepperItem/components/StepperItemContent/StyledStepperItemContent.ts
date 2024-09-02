import styled, { css, CSSProp } from 'styled-components';

import { LABEL_COLOR } from '../../../../constants';
import type { IStepperItem } from '../../declarations';
import { typoMixin, typoColorMixin } from '../../../../../../styled';
import type { TTypoColorScheme } from '../../../../../Typography/declarations';

export interface StyledStepperItemContentProps {
  $size?: IStepperItem['size'];
  $status?: IStepperItem['status'];
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}

export const StyledStepperItemContent = styled.span<StyledStepperItemContentProps>`
  ${({ $size, $status = 'pending', theme }) => css`
    ${typoMixin({ $size, theme, $variant: 'action' })};
    ${typoColorMixin({
      $colorScheme: LABEL_COLOR[$status] as TTypoColorScheme,
      theme,
    })};
  `};
`;
