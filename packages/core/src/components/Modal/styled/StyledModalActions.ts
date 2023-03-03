import styled, { css } from 'styled-components';

import { getLineHeight } from '../../../styled/mixins/baseMixins';
interface StyledModalActionsProps {
  headerStyle?: string;
}

export const StyledModalActions = styled.ul<StyledModalActionsProps>`
  ${({ theme, headerStyle }) => {
    const tokensModal = theme.tokens.cmp.modal;

    return css`
      display: flex;
      align-items: center;
      gap: ${tokensModal.headerButtons.space.gap};
      margin-left: auto;
      height: ${getLineHeight({
        tokens: theme.tokens,
        variant: 'heading',
        size: headerStyle !== 'dialog' ? 'h4' : 'h5',
      })};
    `;
  }};
`;
