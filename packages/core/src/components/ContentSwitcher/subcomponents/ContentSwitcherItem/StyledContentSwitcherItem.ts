import styled, { css } from 'styled-components';

// declarations
import { ButtonSelectableState } from '../../../';

// styled
import { StyledButton } from '../../../Button/StyledButton';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledContentSwitcherItemProps {
  /** Sets the color scheme according to component state */
  state?: ButtonSelectableState;
  /** If the item occupies all the available space. */
  wide?: boolean;
}

export const StyledContentSwitcherItem = styled(
  StyledButton
)<StyledContentSwitcherItemProps>`
  ${({ state, theme, wide }) => {
    const aliasTokens = theme.tokens.alias;
    return css`
      ${wide &&
      css`
        flex: 1 1 100%;
      `}

      &&&:has(:checked) {
        box-shadow: ${aliasTokens.elevation.boxShadow.depth.raised};
        background-color: ${aliasTokens.color.background.surface.base.base};
      }

      ${state === 'selected' &&
      css`
        &&& {
          box-shadow: ${aliasTokens.elevation.boxShadow.depth.raised};
          background-color: ${aliasTokens.color.background.surface.base.base};
        }
      `}

      ${state !== 'disabled' &&
      state !== 'selected' &&
      css`
        &:hover {
          background-color: ${theme.tokens.cmp.button.color.background.blendBase
            .hovered};
        }
      `}
    `;
  }}
`;
