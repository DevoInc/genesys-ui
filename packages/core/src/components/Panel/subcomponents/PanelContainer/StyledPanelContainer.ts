import styled, { css } from 'styled-components';

import { heightMixin, widthMixin } from '../../../../styled/mixins/utilsMixins';
import { getPanelTokens } from '../../helpers';
import { StyledBox, StyledBoxProps } from '../../../Box/StyledBox';

interface PanelBorderSettings {
  color?: React.CSSProperties['color'];
  width?: React.CSSProperties['borderWidth'];
}

interface PanelHeightScheme {
  height?: React.CSSProperties['height'];
  minHeight?: React.CSSProperties['minHeight'];
  maxHeight?: React.CSSProperties['maxHeight'];
}

interface PanelWidthScheme {
  width?: React.CSSProperties['width'];
  minWidth?: React.CSSProperties['minWidth'];
  maxWidth?: React.CSSProperties['maxWidth'];
}

export interface StyledPanelProps extends StyledBoxProps {
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
