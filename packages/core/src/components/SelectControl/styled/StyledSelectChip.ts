import styled, { css } from 'styled-components';

import icons from '@devoinc/genesys-icons/dist/icon-variables';

import { iconFontMixin, pseudoElementMixin } from '../../../styled/mixins';
import { StyledButtonContainer } from '../../Button/components/ButtonContainer/StyledButtonContainer';
import { StyledChip } from '../../Chip/styled';

const getSortable = (sortable?: boolean) => {
  if (!sortable) return null;
  return css`
    cursor: move;

    &::after {
      ${pseudoElementMixin({ content: `'${icons.row_drag_drop}'` })}
      ${iconFontMixin()};
      transition: opacity 0.1s ease-in-out;
      transform: translate(0, -50%);
      opacity: 0.4;
      left: 0;
      top: 50%;
      font-size: 2.2rem;
      height: 0.8rem;
      overflow: hidden;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
    }
  `;
};

interface StyledSelectChipProps {
  sortable?: boolean;
}

export const StyledSelectChip = styled(StyledChip)<StyledSelectChipProps>`
  ${({ theme, sortable }) => {
  const selectTokens = theme.cmp.select;
  const aliasTokens = theme.alias;
  const chipTokens = selectTokens.chip;
  const chipRemoveTokens = selectTokens.chipRemove;
  return css`
      padding-right: 0.8rem;
      margin: ${chipTokens.space.margin};
      white-space: pre;
      cursor: default;

      ${getSortable(sortable)};

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
