import { css, DefaultTheme } from 'styled-components';
import { InlineMessageProps } from './InlineMessage';
import { getBorderPlacement } from './utils';

export const inlineMessageContainerMixin = ({
  placement,
  status = 'help',
  theme,
}: {
  placement: InlineMessageProps['placement'];
  status: InlineMessageProps['status'];
  theme: DefaultTheme;
}) => {
  const tokens = theme.cmp.inlineMessage;

  return css`
    position: relative;
    background-color: ${tokens.color.background};
    overflow: hidden;

    ${status &&
    css`
      &::before {
        content: '';
        position: absolute;
        background-color: ${tokens.color.border[status]};
      }

      ${getBorderPlacement(placement || '')};
    `};
  `;
};
