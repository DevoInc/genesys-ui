import styled, { css } from 'styled-components';

export interface StyledCollapseContainerProps {
  expanded?: boolean;
}

export const StyledCollapseContainer = styled.div<StyledCollapseContainerProps>`
  ${({ expanded = false, theme }) => {
    const aliasTokens = theme.alias;

    return css`
      position: relative;
      transition: border-color ${aliasTokens.mutation.transitionDuration.action}
        ease;
      border-bottom: solid ${aliasTokens.shape.borderSize.separator.md}
        ${expanded
          ? 'transparent'
          : aliasTokens.color.border.separator.base.weak};
      min-height: ${aliasTokens.size.height.surface.xs};
      background-color: ${aliasTokens.color.background.surface.base.raised};

      ${expanded &&
      css`
        background-color: ${aliasTokens.color.background.surface.base.expanded};
      `}
    `;
  }}
`;
