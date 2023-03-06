import styled, { css } from 'styled-components';

import {
  PanelContentSettings,
  PanelHasScroll,
  PanelHeaderSettings,
} from '../Panel/declarations';

import {
  StyledPanelHeaderContent,
  StyledPanelHeaderContentPrepend,
  StyledPanelHeaderContentMiddle,
} from '../Panel/components/PanelHeaderContent/StyledPanelHeaderContent';

import { StyledPanelContent } from '../Panel/StyledPanel';

export interface StyledPanelSectionProps {
  contentSettings?: PanelContentSettings;
  hasScroll?: PanelHasScroll;
  headerSettings?: PanelHeaderSettings;
}

export const StyledPanelSection = styled.section<StyledPanelSectionProps>`
  ${({ contentSettings, hasScroll, headerSettings, theme }) => {
    const tokensPanelSection = theme.tokens.cmp.panelSection;
    const contentSpacing = tokensPanelSection.content.space;
    const headerPadding = tokensPanelSection.header.space.padding;

    let contentMargin;
    let contentPadding = contentSpacing.padding.noHasScroll;

    if (contentSettings?.removeSpace) {
      contentMargin = contentSpacing.margin.removeSpace;
      contentPadding = contentSpacing.padding.removeSpace;
    }

    if (hasScroll) {
      contentMargin = contentSpacing.margin.hasScroll;
      contentPadding = undefined;
    }

    if (contentSettings?.removeSpace && hasScroll) {
      contentMargin = contentSpacing.margin.removeSpaceHasScroll;
      contentPadding = contentSpacing.padding.removeSpaceHasScroll;
    }

    return css`
      > ${StyledPanelHeaderContent} {
        padding: ${!('bottom' in headerSettings?.renderContent) &&
        !('top' in headerSettings?.renderContent) &&
        headerPadding};

        ${StyledPanelHeaderContentPrepend} {
          display: flex;
          align-items: center;
          align-self: stretch;
        }

        ${StyledPanelHeaderContentMiddle} {
          padding: ${headerPadding};
        }
      }

      > ${StyledPanelContent} {
        padding: ${contentPadding};
        margin: ${contentMargin};
      }
    `;
  }}
`;
