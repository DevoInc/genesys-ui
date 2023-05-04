import styled, { css } from 'styled-components';
import * as React from 'react';

import {
  FooterSettings,
  HeaderSettings as PanelHeaderSettings,
  RenderContent,
} from '../Panel/declarations';

import {
  StyledPanelHeaderContent,
  StyledPanelHeaderContentMiddle,
} from '../Panel/components/PanelHeader/PanelHeaderContent/StyledPanelHeaderContent';
import { StyledPanelHeaderContentPrepend } from '../Panel/components/PanelHeader/PanelHeaderContent/components/StyledPanelHeaderContentPrepend';

import { StyledPanelBodyContainer } from '../Panel/components/PanelBody/StyledPanelBodyContainer';
import { PanelBodyContainerProps } from '../Panel/components';
import { StyledPanelFooterContent } from '../Panel/components/PanelFooter/PanelFooterContent/StyledPanelFooterContent';

export interface StyledPanelSectionProps {
  bodySettings?: PanelBodyContainerProps['bodySettings'];
  hasScroll?: boolean;
  headerSettings?: PanelHeaderSettings;
  footerSettings?: FooterSettings;
}

export const StyledPanelSection = styled.section<StyledPanelSectionProps>`
  ${({ bodySettings, footerSettings, hasScroll, headerSettings, theme }) => {
    const tokensPanelSection = theme.cmp.panelSection;
    const contentSpacing = tokensPanelSection.content.space;
    const headerPadding = tokensPanelSection.header.space.padding;
    const panelHeaderContent = headerSettings?.renderContent as RenderContent;

    const spacingCmp = theme.alias.space.cmp;
    const footerPaddingLarge = `${spacingCmp.md} ${spacingCmp.lg}`;
    const footerPaddingSmall = `${spacingCmp.xxs} ${spacingCmp.xs}`;

    let contentMargin;
    let contentPadding = contentSpacing.padding.noHasScroll;

    if (bodySettings?.removeSpace) {
      contentMargin = contentSpacing.margin.removeSpace;
      contentPadding = contentSpacing.padding.removeSpace;
    }

    if (hasScroll) {
      contentMargin = contentSpacing.margin.hasScroll;
      contentPadding = undefined;
    }

    if (bodySettings?.removeSpace && hasScroll) {
      contentMargin = contentSpacing.margin.removeSpaceHasScroll;
      contentPadding = contentSpacing.padding.removeSpaceHasScroll;
    }

    const isFullReactFooter = React.isValidElement(
      footerSettings?.renderContent
    );

    return css`
      > ${StyledPanelHeaderContent} {
        padding: ${!('bottom' in panelHeaderContent) &&
        !('top' in panelHeaderContent) &&
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

      > ${StyledPanelBodyContainer} {
        padding: ${contentPadding};
        margin: ${contentMargin};
      }

      > ${StyledPanelFooterContent} {
        padding: ${isFullReactFooter ? footerPaddingLarge : footerPaddingSmall};
      }
    `;
  }}
`;
