import styled, { css } from 'styled-components';

import { heightMixin, widthMixin } from '../../styled/mixins/utilsMixins';
import { scrollbars } from '../../styled/mixins/scrollbars';
import { getPanelTokens } from './helpers';
import {
  PanelBorderSettings,
  PanelContentSettings,
  PanelFooterSettings,
  PanelHasScroll,
  PanelHeaderSettings,
  PanelHeightScheme,
  PanelSize,
  PanelWidthScheme,
} from './declarations';
import { StyledBox, StyledBoxProps } from '../Box/StyledBox';

export interface StyledPanelProps extends Omit<StyledBoxProps, 'title'> {
  borderSettings?: PanelBorderSettings;
  colorScheme?: React.CSSProperties['backgroundColor'];
  heightScheme?: PanelHeightScheme;
  widthScheme?: PanelWidthScheme;
}

export const StyledPanel = styled(StyledBox)<StyledPanelProps>`
  ${({
    // borderSettings,
    colorScheme,
    $display,
    elevation,
    heightScheme,
    theme,
    widthScheme,
  }) => {
    const panelTokens = getPanelTokens(theme);
    return css`
      ${$display !== 'none' &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `};
      ${widthScheme && widthMixin(widthScheme)};
      ${heightScheme && heightMixin(heightScheme)};
      overflow: hidden;
      border-radius: ${elevation &&
      elevation !== 'ground' &&
      !elevation.includes('sticky') &&
      panelTokens.shape.borderRadius};
      background-color: ${colorScheme || panelTokens.color.background};
    `;
  }};
`;

export interface StyledPanelHeaderProps {
  hasScroll?: PanelHasScroll;
  headerSettings?: PanelHeaderSettings;
}

export const StyledPanelHeader = styled.header<StyledPanelHeaderProps>`
  ${({ hasScroll, headerSettings, theme }) => {
    const panelHeaderTokens = getPanelTokens(theme).header;

    return css`
      flex-shrink: 0;
      z-index: 1;
      box-shadow: ${hasScroll &&
      headerSettings?.hasShadowStyle &&
      panelHeaderTokens.elevation.boxShadow};
      border-bottom: ${headerSettings?.bordered &&
      `1px solid ${panelHeaderTokens.color.border}`};
    `;
  }};
`;

export interface StyledPanelContentProps {
  hasScroll?: PanelHasScroll;
  contentSettings?: PanelContentSettings;
  size?: PanelSize;
}

export const StyledPanelContent = styled.div<StyledPanelContentProps>`
  ${({ contentSettings, hasScroll, size, theme }) => {
    const panelContentTokens = getPanelTokens(theme).content;

    let trackRadius;
    let padding = panelContentTokens.space.padding[size];

    const margin = hasScroll
      ? panelContentTokens.space.margin[size]
      : undefined;

    if (contentSettings?.removeSpace) {
      trackRadius = '0';
      padding = '0';
    }

    return css`
      ${scrollbars({ trackRadius, theme })};
      position: relative;
      flex: 1 1 100%;
      padding: ${padding};
      margin: ${margin};
      overflow: auto;
    `;
  }};
`;

export interface StyledPanelFooterProps {
  footerSettings?: PanelFooterSettings;
  hasScroll?: PanelHasScroll;
}

export const StyledPanelFooter = styled.footer<StyledPanelFooterProps>`
  ${({ footerSettings, hasScroll, theme }) => {
    const panelTokensFooter = getPanelTokens(theme).footer;
    const footerModalTokens = theme.tokens.cmp.modal.footer;

    return css`
      z-index: 1;
      flex-shrink: 0;
      box-shadow: ${hasScroll &&
      footerSettings?.hasShadowStyle &&
      panelTokensFooter.elevation.boxShadow};
      border-top: ${footerSettings?.bordered &&
      `1px solid ${panelTokensFooter.color.border}`};
      background-color: ${footerSettings?.hasBackground &&
      footerModalTokens.color.background};
    `;
  }};
`;
