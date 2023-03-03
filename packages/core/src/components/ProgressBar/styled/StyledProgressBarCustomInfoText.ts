import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import styled, { css } from 'styled-components';

import { typoColorMixin, typoMixin } from '../../../styled/mixins/baseMixins';
import { STATUS_MAP } from '../declarations';
import { BaseStyledProgressBarProps } from './declarations';

export interface StyledProgressBarCustomInfoTextProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<BaseStyledProgressBarProps, 'progress' | 'size'> {}

export const StyledProgressBarCustomInfoText = styled.span<StyledProgressBarCustomInfoTextProps>`
  ${({ progress, size, theme }) => css`
    // body text mixin
    ${typoMixin({ variant: 'body', theme, size })};

    // text color
    ${typoColorMixin({
      variant: 'body',
      colorScheme: STATUS_MAP[progress],
      theme,
    })};

    & + & {
      margin-left: ${theme.tokens.alias.space.cmp.sm};
    }
  `};
`;
