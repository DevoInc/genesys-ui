import * as React from 'react';
import styled, { css } from 'styled-components';

import { PanelSize } from '../../declarations';
import { getPanelTokens } from '../../helpers';
import {
  StyledHeading,
  StyledParagraph,
} from '../../../Typography/StyledTypography';

export interface StyledPanelHeaderContentProps {
  bottomContent: React.ReactElement;
  size: PanelSize;
  subtitle: string;
  topContent: React.ReactElement;
}

export const StyledPanelHeaderContent = styled.div<StyledPanelHeaderContentProps>`
  ${({ bottomContent, size, subtitle, theme, topContent }) => {
    const tokensPanelHeader = getPanelTokens(theme).header;

    return css`
      ${topContent || bottomContent
        ? null
        : css`
            display: flex;
            align-items: ${subtitle ? 'flex-start' : 'center'};
          `};
      padding: ${!bottomContent &&
      !topContent &&
      tokensPanelHeader.space.padding[size]};
    `;
  }};
`;

export const StyledPanelHeaderContentTop = styled.div``;

export interface StyledPanelHeaderContentMiddleProps {
  size: PanelSize;
}

export const StyledPanelHeaderContentMiddle = styled.div<StyledPanelHeaderContentMiddleProps>`
  ${({ size, theme }) => {
    const tokensPanelHeader = getPanelTokens(theme).header;

    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${tokensPanelHeader.space.padding[size]};
    `;
  }};
`;

export interface StyledPanelHeaderContentPrependProps {
  size: PanelSize;
}

export const StyledPanelHeaderContentPrepend = styled.div<StyledPanelHeaderContentPrependProps>`
  ${({ size, theme }) => {
    const tokensPanelHeaderPrepend = getPanelTokens(theme).headerPrepend;

    return css`
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-right: ${tokensPanelHeaderPrepend.space.marginRight[size]};
    `;
  }};
`;

export const StyledPanelHeaderContentBody = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
`;

export interface StyledPanelHeaderContentIconProps {
  icon: string;
  size: PanelSize;
}

export const StyledPanelHeaderContentIcon = styled.i.attrs<StyledPanelHeaderContentIconProps>(
  ({ icon }) => ({
    className: (icon && `gi-${icon}`) || '',
    'aria-hidden': true,
  })
)<StyledPanelHeaderContentIconProps>`
  ${({ size, theme }) => {
    const tokensPanelHeaderIcon = getPanelTokens(theme).headerIcon;

    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      align-self: flex-start;
      margin-right: ${tokensPanelHeaderIcon.space.marginRight[size]};
      height: ${tokensPanelHeaderIcon.size.height[size]};
      font-size: ${tokensPanelHeaderIcon.typo.fontSize[size]};
      color: ${tokensPanelHeaderIcon.color.text};
    `;
  }};
`;

export const StyledPanelHeaderContentHgroup = styled.div`
  ${({ theme }) => {
    const tokensPanelHeaderSubtitle = getPanelTokens(theme).headerSubtitle;
    const tokensPanelHeaderTitle = getPanelTokens(theme).headerTitle;

    return css`
      min-width: 0;

      ${StyledHeading} {
        max-width: ${tokensPanelHeaderTitle.size.maxWidth};
      }

      ${StyledParagraph} {
        margin-top: ${tokensPanelHeaderSubtitle.space.marginTop};
        max-width: ${tokensPanelHeaderSubtitle.size.maxWidth};
      }
    `;
  }}
`;

export interface StyledPanelHeaderContentLegendProps {
  size: PanelSize;
}

export const StyledPanelHeaderContentLegend = styled.div<StyledPanelHeaderContentLegendProps>`
  ${({ size, theme }) => {
    const tokensPanelHeaderLegend = getPanelTokens(theme).headerLegend;

    return css`
      display: flex;
      align-items: center;
      margin-left: ${tokensPanelHeaderLegend.space.marginLeft[size]};
      height: ${tokensPanelHeaderLegend.size.height[size]};
    `;
  }}
`;

export interface StyledPanelHeaderContentAppendProps {
  size: PanelSize;
}

export const StyledPanelHeaderContentAppend = styled.div<StyledPanelHeaderContentAppendProps>`
  ${({ size, theme }) => {
    const tokensPanelHeaderAction = getPanelTokens(theme).headerAction;
    const tokensPanelHeaderAppend = getPanelTokens(theme).headerAppend;

    return css`
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: auto;

      > *:first-child {
        margin-left: ${tokensPanelHeaderAppend.space.marginLeft[size]};
      }
      > *:not(:first-child) {
        margin-left: ${tokensPanelHeaderAction.space.marginLeft[size]};
      }
    `;
  }};
`;

export const StyledPanelHeaderContentBottom = styled.div``;
