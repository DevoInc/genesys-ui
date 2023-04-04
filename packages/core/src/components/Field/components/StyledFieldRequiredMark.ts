import styled, { css } from 'styled-components';

import { UIColorScheme } from '../../../declarations';

const colorSchemeFeedback: UIColorScheme[] = [
  'success',
  'error',
  'warning',
  'help',
  'info',
];

export interface StyledFieldRequiredMarkProps {
  colorScheme?: UIColorScheme;
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
