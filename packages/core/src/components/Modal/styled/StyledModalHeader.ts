import styled, { css } from 'styled-components';

import { StyledDecoratorBar } from '../../DecoratorBar/StyledDecoratorBar';
import { StyledModalWithStatusProps } from '../declarations';

export const StyledModalHeader = styled.header<StyledModalWithStatusProps>`
  ${({ theme, hasScroll, headerStyle, status }) => {
    const modalTokens = theme.tokens.cmp.modal;
    const modalHeaderTokens = theme.tokens.cmp.modal.header;
    const aliasTokens = theme.tokens.alias;

    return css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      box-shadow: ${hasScroll && modalHeaderTokens.elevation.boxShadow};
      border-bottom: ${headerStyle !== 'dialog'
        ? modalHeaderTokens.shape.border
        : 'unset'};
      padding: ${modalHeaderTokens.space.padding.ver}
        ${modalHeaderTokens.space.padding.right}
        ${modalHeaderTokens.space.padding.ver}
        ${modalHeaderTokens.space.padding.left};
      padding-right: ${aliasTokens.space.cmp.sm};
      background-color: ${headerStyle === 'dialog' && status
        ? theme.tokens.cmp.dialog.header.color.background[status]
        : 'inherit'};

      ${StyledDecoratorBar} {
        margin-right: ${modalTokens.headerDecoratorBar.space.marginRight};
      }
    `;
  }}
`;
