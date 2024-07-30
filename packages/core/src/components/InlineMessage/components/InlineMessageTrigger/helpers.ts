import { css, DefaultTheme } from 'styled-components';

import type { TButtonExpandableState } from '../../../Button';
import { getSpacingPropCss } from '../../../../helpers/spacing';

export const inlineMessageTriggerMixin = ({
  theme,
}: {
  theme: DefaultTheme;
}) => css`
  background-color: transparent;
  height: auto;
  padding: 0;

  &:before {
    content: none;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
  }

  > * {
    display: flex;
    align-items: center;
    gap: ${theme.cmp.button.icon.space.margin.md};
  }
`;

export const inlineMessageTriggerParagraphMixin = ({
  last = false,
  state,
}: {
  last?: boolean;
  state: TButtonExpandableState;
}) => css`
  opacity: ${state === 'disabled' && 0.4};
  font-weight: 700;
  text-decoration: ${(state === 'hovered' || state === 'focused') &&
  'underline'};

  ${last &&
  css`
    padding-right: ${({ theme }) => getSpacingPropCss(theme)('cmp-xxs')};
  `}

  *:enabled:hover & {
    text-decoration: underline;
  }
`;
