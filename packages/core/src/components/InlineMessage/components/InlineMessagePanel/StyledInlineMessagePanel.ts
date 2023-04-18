import styled, { css } from 'styled-components';

import { imgResponsiveMixin } from '../../../../styled/mixins/utilsMixins';

import { StyledPanelBodyContainer } from '../../../Panel/components/PanelBody/StyledPanelBodyContainer';
import { StyledPanelHeaderContent } from '../../../Panel/components/PanelHeader/PanelHeaderContent/StyledPanelHeaderContent';
import { StyledPanelFooterContent } from '../../../Panel/components/PanelFooter/PanelFooterContent/StyledPanelFooterContent';

interface StyledInlineMessagePanelProps {
  hasScroll?: boolean;
}

export const StyledInlineMessagePanel = styled.div<StyledInlineMessagePanelProps>`
  ${({ hasScroll = false, theme }) => {
    const tokens = theme.cmp.inlineMessage;

    return css`
      ${StyledPanelHeaderContent} {
        padding: ${tokens.header.space.padding[
          hasScroll ? 'hasScroll' : 'noHasScroll'
        ]};
      }

      ${StyledPanelBodyContainer} {
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
