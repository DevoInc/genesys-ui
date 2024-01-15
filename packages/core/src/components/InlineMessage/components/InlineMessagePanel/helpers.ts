import { css, DefaultTheme } from 'styled-components';

import { imgResponsiveMixin } from '../../../../styled';

export interface InlineMessagePanelMixinProps {
  hasScroll?: boolean;
  theme: DefaultTheme;
}

export const inlineMessagePanelHeaderMixin = ({
  hasScroll = false,
  theme,
}: InlineMessagePanelMixinProps) => {
  const tokens = theme.cmp.inlineMessage;

  return css`
    padding: ${tokens.header.space.padding[
      hasScroll ? 'hasScroll' : 'noHasScroll'
    ]};
  `;
};

export const inlineMessagePanelBodyMixin = ({
  hasScroll = false,
  theme,
}: InlineMessagePanelMixinProps) => {
  const tokens = theme.cmp.inlineMessage;

  return css`
    padding: ${hasScroll
      ? tokens.content.space.padding.hasScroll
      : tokens.content.space.padding.noHasScroll};

    img {
      ${imgResponsiveMixin};
      margin-bottom: ${tokens.contentImg.space.marginBottom};
    }
  `;
};
