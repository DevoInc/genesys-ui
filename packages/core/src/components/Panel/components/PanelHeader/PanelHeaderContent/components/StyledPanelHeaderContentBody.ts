import styled, { css } from 'styled-components';

import {
  StyledHeading,
  StyledParagraph,
} from '../../../../../Typography/StyledTypography';
import { getPanelTokens } from '../../../../helpers';
import { PanelHeaderSize } from '../../declarations';

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

export interface StyledPanelHeaderContentIconProps {
  icon: string;
  size: PanelHeaderSize;
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

export const StyledPanelHeaderContentBodyHeader = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
`;
