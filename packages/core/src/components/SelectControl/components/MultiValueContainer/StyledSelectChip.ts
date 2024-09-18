import styled, { css } from 'styled-components';

import { StyledButtonContainer } from '../../../Button/components/ButtonContainer/StyledButtonContainer';
import { StyledChipContainer } from '../../../Chip/components/ChipContainer/StyledChipContainer';

export const StyledSelectChip = styled(StyledChipContainer)`
  ${({ theme }) => {
    const selectTokens = theme.cmp.select;
    const aliasTokens = theme.alias;
    const chipTokens = selectTokens.chip;
    const chipRemoveTokens = selectTokens.chipRemove;

    return css`
      padding-right: 0.8rem;
      margin: ${chipTokens.space.margin};
      white-space: pre;
      cursor: default;

      &:hover::before,
      &:focus::before {
        background-color: transparent;
      }

      &:hover,
      &:focus,
      &:active {
        color: ${aliasTokens.color.text.body.strong};
      }

      ${StyledButtonContainer} {
        margin-left: ${chipRemoveTokens.space.marginLeft};
        margin-right: ${chipRemoveTokens.space.marginRight};
      }

      b,
      strong {
        font-weight: bold;
      }
    `;
  }}
`;
