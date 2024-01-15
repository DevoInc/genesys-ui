import { css, DefaultTheme } from 'styled-components';
import { InlineMessageProps } from '../../InlineMessage';

export const inlineMessageArrowMixin = ({
  placement,
  status = 'help',
  theme,
}: {
  placement: InlineMessageProps['placement'];
  status: InlineMessageProps['status'];
  theme: DefaultTheme;
}) => {
  const bgColor = theme.cmp.inlineMessage.color.border[status];

  return css`
    ::after {
      content: none;
    }

    ${placement?.includes('top') &&
    css`
      border-top-color: ${bgColor};
    `};

    ${placement?.includes('bottom') &&
    css`
      border-bottom-color: ${bgColor};
    `};

    ${placement?.includes('right') &&
    css`
      border-right-color: ${bgColor};
    `};

    ${placement?.includes('left') &&
    css`
      border-left-color: ${bgColor};
    `};
  `;
};
