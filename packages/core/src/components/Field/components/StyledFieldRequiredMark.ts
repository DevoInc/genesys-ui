import styled, { css } from 'styled-components';

import { TUIColorScheme } from '../../../declarations';

const colorSchemeFeedback: TUIColorScheme[] = [
  'success',
  'error',
  'warning',
  'help',
  'info',
];

export interface StyledFieldRequiredMarkProps {
  colorScheme?: TUIColorScheme;
}

export const StyledFieldRequiredMark = styled.abbr<StyledFieldRequiredMarkProps>`
  ${({ colorScheme = 'info', theme }) => {
    const { marker } = theme.cmp.label;
    const spacingTokens = theme.alias.space;
    return css`
      margin-right: ${spacingTokens.cmp.xxs};
      text-decoration: none;
      color: ${colorSchemeFeedback.includes(colorScheme)
        ? marker.color.text[colorScheme]
        : marker.color.text.base};
      cursor: help;
    `;
  }};
`;
