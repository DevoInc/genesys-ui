import styled, { css } from 'styled-components';

import { StyledDecoratorBar } from '../../DecoratorBar/StyledDecoratorBar';
import { StyledModalWithStatusProps } from '../declarations';

export const StyledModalHeader = styled.header<StyledModalWithStatusProps>`
  ${({ theme, hasBoxShadow, headerStyle, status }) => {
    const modalTokens = theme.cmp.modal;
    const modalHeaderTokens = theme.cmp.modal.header;
    const aliasTokens = theme.alias;

    return css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      box-shadow: ${hasBoxShadow && modalHeaderTokens.elevation.boxShadow};
      border-bottom: ${headerStyle !== 'dialog'
        ? modalHeaderTokens.shape.border
        : 'unset'};
      padding: ${modalHeaderTokens.space.padding.ver}
        ${modalHeaderTokens.space.padding.right}
        ${modalHeaderTokens.space.padding.ver}
        ${modalHeaderTokens.space.padding.left};
      padding-right: ${aliasTokens.space.cmp.sm};
      background-color: ${headerStyle === 'dialog' && status
        ? theme.cmp.dialog.header.color.background[status]
        : 'inherit'};

      ${StyledDecoratorBar} {
        margin-right: ${modalTokens.headerDecoratorBar.space.marginRight};
      }
    `;
  }}
`;
