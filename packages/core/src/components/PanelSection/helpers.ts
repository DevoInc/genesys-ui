import { css, DefaultTheme } from 'styled-components';

import type { PanelBodyProps } from '../Panel/components';

interface getPanelSectionBodySpacingProps {
  removeSpace: PanelBodyProps['removeSpace'];
  hasScroll: boolean;
  theme: DefaultTheme;
}

/**
 * Get the specific spacing for component PanelBody when it's used inside a PanelSection
 *
 * @return object with PanelBody specific spacing values
 */
export const getPanelSectionBodySpacing = ({
  hasScroll,
  removeSpace,
  theme,
}: getPanelSectionBodySpacingProps) => {
  const contentSpacingTokens = theme.cmp.panelSection.content.space;
  let contentMargin;
  let contentPadding = contentSpacingTokens.padding.noHasScroll;

  if (removeSpace) {
    contentMargin = contentSpacingTokens.margin.removeSpace;
    contentPadding = contentSpacingTokens.padding.removeSpace;
  }

  if (hasScroll) {
    contentMargin = contentSpacingTokens.margin.hasScroll;
    contentPadding = undefined;
  }

  if (removeSpace && hasScroll) {
    contentMargin = contentSpacingTokens.margin.removeSpaceHasScroll;
    contentPadding = contentSpacingTokens.padding.removeSpaceHasScroll;
  }

  return { contentMargin, contentPadding };
};

/**
 * Get the specific styles for Panel header component when it's used inside a PanelSection
 *
 * @return styles with PanelSection header specific spacing values
 */

export const panelSectionHeaderMixin = ({ theme }: { theme: DefaultTheme }) => {
  const headerPadding = theme.cmp.panelSection.header.space.padding;
  return css`
    padding: ${headerPadding};
  `;
};

/**
 * Get the specific styles for PanelBody component when it's used inside a PanelSection
 *
 * @return styles with PanelSection body specific spacing values
 */

export const panelSectionBodyMixin = ({
  hasScroll,
  removeSpace,
  theme,
}: getPanelSectionBodySpacingProps) => css`
  padding: ${getPanelSectionBodySpacing({
    hasScroll,
    removeSpace,
    theme,
  }).contentPadding};
  margin: ${getPanelSectionBodySpacing({
    hasScroll,
    removeSpace,
    theme,
  }).contentMargin};
`;

/**
 * Get the specific styles for PanelFooter component when it's used inside a PanelSection
 *
 * @return styles with PanelSection footer specific spacing values
 */

export const panelSectionFooterMixin = ({ theme }: { theme: DefaultTheme }) => {
  return css`
    padding: ${theme.cmp.panelSection.footer.space.padding};
  `;
};
