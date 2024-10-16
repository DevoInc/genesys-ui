import styled, { css, CSSProp } from 'styled-components';

import { TUIColorScheme } from '../../../../declarations';

const colorSchemeFeedback: TUIColorScheme[] = [
  'success',
  'error',
  'warning',
  'help',
  'info',
];

export interface StyledFieldRequiredMarkProps {
  $colorScheme?: TUIColorScheme;
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}

export const StyledFieldRequiredMark = styled.abbr<StyledFieldRequiredMarkProps>`
  ${({ $colorScheme = 'info', theme }) => {
    const { requiredMark } = theme.cmp.field;
    return css`
      margin-right: ${requiredMark.space.marginRight};
      text-decoration: none;
      color: ${colorSchemeFeedback.includes($colorScheme)
        ? requiredMark.color.text[$colorScheme]
        : requiredMark.color.text.base};
      cursor: help;
    `;
  }};
`;
