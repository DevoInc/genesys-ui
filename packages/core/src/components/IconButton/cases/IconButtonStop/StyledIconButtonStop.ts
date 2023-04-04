import styled, { css } from 'styled-components';

import { pseudoElementMixin } from '../../../../styled/mixins/utilsMixins';
import { StyledButton } from '../../../Button/StyledButton';

export const StyledIconButtonStop = styled(StyledButton)`
  ${({ size, state, theme }) => {
    const tokens = theme.cmp.button;
    const iconTokens = theme.cmp.iconButtonStop;
    const circle = `calc(${tokens.size.height[size]} - 0.8rem)`;
    return css`
      -webkit-font-smoothing: antialiased;

      i {
        font-size: ${iconTokens.icon.size.square[size]};
        color: ${state !== 'disabled' && iconTokens.icon.color.text};
      }

      ${state !== 'loading' &&
      size !== 'xxs' &&
      size !== 'xs' &&
      size !== 'sm' &&
      css`
        &::after {
          ${pseudoElementMixin};
          top: auto;
          left: auto;
          width: ${circle};
          height: ${circle};
          border: solid 0.2rem ${iconTokens.circle.color.border};
          border-radius: ${tokens.shape.borderRadius.full};
        }
      `}
    `;
  }}
`;
