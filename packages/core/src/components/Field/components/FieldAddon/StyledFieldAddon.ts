import styled, { css } from 'styled-components';

import type { IFieldStyled } from '../../declarations';
import { typoMixin } from '../../../../styled/mixins';
import { disabledMixin } from '../../../../styled/mixins/state';

export interface StyledFieldAddonProps
  extends Pick<IFieldStyled, '$size' | '$disabled' | '$position'> {}

export const StyledFieldAddon = styled.span<StyledFieldAddonProps>`
  ${({ $disabled, $position, $size = 'md', theme }) => {
    const cmpTokens = theme.cmp.field.addon;
    const borderWidth = cmpTokens.shape.borderSize.base;
    return css`
      ${typoMixin({
        theme,
        $size,
      })};
      flex: 0 0 auto;
      align-items: center;
      display: flex;
      border: solid ${cmpTokens.color.border.base};
      border-width: ${borderWidth};
      border-radius: ${cmpTokens.shape.borderRadius.base};
      height: ${cmpTokens.size.height[$size]};
      padding: 0 ${cmpTokens.space.padding.hor[$size]};
      background: ${cmpTokens.color.background.base};
      color: ${cmpTokens.color.text.base};

      ${$disabled &&
      css`
        ${disabledMixin(theme)};
      `}

      ${$position === 'left'
        ? css`
            transform: translate(${borderWidth}, 0);
            border-right-width: 0;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
          `
        : css`
            transform: translate(-${borderWidth}, 0);
            border-left-width: 0;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
          `}
    `;
  }}
`;
