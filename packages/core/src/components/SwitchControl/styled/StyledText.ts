import styled, { css } from 'styled-components';

import { typoMixin } from '../../../';

export const StyledText = styled.span`
  ${({ theme }) => css`
    ${typoMixin({ bold: true, theme })};
    position: relative;
    display: inline-flex;
    white-space: nowrap;
    user-select: none;
  `};
`;
