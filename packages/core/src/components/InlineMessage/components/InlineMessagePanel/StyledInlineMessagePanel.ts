import styled, { css } from 'styled-components';

import { imgResponsiveMixin } from '../../../../styled/mixins/utilsMixins';

import { StyledPanelContent } from '../../../Panel/StyledPanel';
import { StyledPanelHeaderContent } from '../../../Panel/components/PanelHeaderContent/StyledPanelHeaderContent';
import { StyledPanelFooterContent } from '../../../Panel/components/PanelFooterContent/StyledPanelFooterContent';

interface StyledInlineMessagePanelProps {
  hasScroll?: boolean;
}

export const StyledInlineMessagePanel = styled.div<StyledInlineMessagePanelProps>`
  ${({ hasScroll = false, theme }) => {
    const tokens = theme.tokens.cmp.inlineMessage;

    return css`
      ${StyledPanelHeaderContent} {
        padding: ${tokens.header.space.padding[
          hasScroll ? 'hasScroll' : 'noHasScroll'
        ]};
      }

      ${StyledPanelContent} {
        padding: ${hasScroll
          ? tokens.content.space.padding.hasScroll
          : tokens.content.space.padding.noHasScroll};

        img {
          ${imgResponsiveMixin};
          margin-bottom: ${tokens.contentImg.space.marginBottom};
        }
      }

      ${StyledPanelFooterContent} {
        padding: ${tokens.footer.space.padding[
          hasScroll ? 'hasScroll' : 'noHasScroll'
        ]};
      }
    `;
  }};
`;
