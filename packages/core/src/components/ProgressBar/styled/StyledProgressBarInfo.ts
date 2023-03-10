import styled, { css } from 'styled-components';

import { getColor } from '../utils';
import { flexMixin } from '../../../styled/mixins/utilsMixins';
import { StyledIcon } from '../../Icon/styled';
import { StyledProgressBarPercent } from './StyledProgressBarPercent';
import { ICON_CIRCULAR_SIZE } from '../declarations';
import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import { BaseStyledProgressBarProps } from './declarations';

export interface StyledProgressBarInfoProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<
      BaseStyledProgressBarProps,
      'colorScheme' | 'typeProp' | 'progress' | 'size'
    > {}

export const StyledProgressBarInfo = styled.div<StyledProgressBarInfoProps>`
  ${({ colorScheme, progress, size, theme, typeProp }) => {
    const aliasTokens = theme.tokens.alias;

    return css`
      --icon-size: ${typeProp === 'circular'
        ? theme.tokens.alias.typo.fontSize.icon[ICON_CIRCULAR_SIZE[size]]
        : theme.tokens.alias.typo.fontSize.icon[size]};
      --items-color: ${getColor({
        colorScheme,
        progress,
        theme,
      })};

      ${flexMixin({
        dis: 'flex',
        dir: typeProp === 'circular' ? 'column' : 'row',
        jc: 'center',
        ai: 'center',
      })};
      flex: 0 0 auto;
      margin-left: ${typeProp === 'circular' ? '0' : aliasTokens.space.cmp.md};
      position: ${typeProp === 'circular' ? 'absolute' : ''};
      width: var(--width-info);

      > ${StyledProgressBarPercent}, > ${StyledIcon} {
        color: var(--items-color);
      }

      > ${StyledIcon} {
        font-size: var(--icon-size);
      }

      > ${StyledIcon} + ${StyledProgressBarPercent} {
        margin: ${typeProp === 'circular'
          ? `${aliasTokens.space.cmp.xxs} 0 0 0`
          : `0 0 0 ${aliasTokens.space.cmp.xs}`};
      }
    `;
  }}
`;
