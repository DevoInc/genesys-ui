import styled, { css } from 'styled-components';

import { StyledButtonContainer } from '../../../Button/components/ButtonContainer/StyledButtonContainer';
import { StyledChipContainer } from '../../../Chip/components/ChipContainer/StyledChipContainer';

export const StyledSelectChip = styled(StyledChipContainer)`
  ${({ theme }) => {
    const selectTokens = theme.cmp.selectControl;
    const chipTokens = selectTokens.chip;
    const chipRemoveTokens = selectTokens.multiValueContainer;

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
        color: ${chipRemoveTokens.color.text.hovered};
      }

      ${StyledButtonContainer} {
        margin-left: ${chipRemoveTokens.space.marginLeft.button};
        margin-right: ${chipRemoveTokens.space.marginRight.button};
      }

      b,
      strong {
        font-weight: bold;
      }
    `;
  }}
`;
