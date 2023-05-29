import { css, DefaultTheme } from 'styled-components';

import { imgResponsiveMixin } from '../../../../styled';

export interface inlineMessagePanelMixinProps {
  hasScroll?: boolean;
  theme: DefaultTheme;
}

export const inlineMessagePanelHeaderMixin = ({
  hasScroll = false,
  theme,
}: inlineMessagePanelMixinProps) => {
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
}: inlineMessagePanelMixinProps) => {
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

export const inlineMessagePanelFooterMixin = ({
  hasScroll = false,
  theme,
}: inlineMessagePanelMixinProps) => {
  const tokens = theme.cmp.inlineMessage;

  return css`
    padding: ${tokens.footer.space.padding[
      hasScroll ? 'hasScroll' : 'noHasScroll'
    ]};
  `;
};
