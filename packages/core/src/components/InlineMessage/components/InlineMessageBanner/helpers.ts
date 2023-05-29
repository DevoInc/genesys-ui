import { css, DefaultTheme } from 'styled-components';

export const inlineMessageBannerMixin = ({
  theme,
}: {
  theme: DefaultTheme;
}) => {
  const tokens = theme.cmp.inlineMessageBanner;
  return css`
    margin: 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-radius: unset;
    border-color: ${tokens.color.border};

    &:first-child {
      border-top: none;
    }
  `;
};
