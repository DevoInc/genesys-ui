import styled, { css } from 'styled-components';
import icons from '@devoinc/genesys-icons/dist/icon-variables.js';

const iconsSort = {
  asc: icons.sort_asc_carets,
  desc: icons.sort_desc_carets,
};

interface StyledSortIndicatorProps {
  sort: 'asc' | 'desc' | 'none';
}

export const StyledSortIndicator = styled.span<StyledSortIndicatorProps>`
  ${({ sort }) => {
    return css`
      &::before {
        content: '${iconsSort[sort]}';
        position: relative;
        display: block;
        font-family: 'gi', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
      }
    `;
  }}
`;
