import styled, { css } from 'styled-components';

import { getColor } from '../utils';
import { StyledIcon } from '../../Icon/StyledIcon';
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
    const aliasTokens = theme.alias;

    return css`
      --icon-size: ${typeProp === 'circular'
        ? theme.alias.typo.fontSize.icon[ICON_CIRCULAR_SIZE[size]]
        : theme.alias.typo.fontSize.icon[size]};
      --items-color: ${getColor({
        colorScheme,
        progress,
        theme,
      })};

      display: flex;
      flex-direction: ${typeProp === 'circular' ? 'column' : 'row'};
      align-items: center;
      justify-content: center;
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
