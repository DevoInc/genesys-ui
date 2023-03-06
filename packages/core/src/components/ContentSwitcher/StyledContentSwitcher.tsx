import * as React from 'react';
import styled, { css } from 'styled-components';

// constants
import { CONTENT_SWITCHER_ITEM_SIZE_MAP } from './constants';

// declarations
import { BaseSize } from '@devoinc/genesys-ui';

// styled
import { StyledFlex } from '../Flex/StyledFlex';
import { StyledContentSwitcherItemProps } from './subcomponents/ContentSwitcherItem/StyledContentSwitcherItem';

export interface StyledContentSwitcherProps
  extends Pick<StyledContentSwitcherItemProps, 'wide'> {
  /** Size of the container */
  size?: BaseSize;
}

export const StyledContentSwitcher = styled((props) => (
  <StyledFlex
    {...props}
    role="tablist"
    alignItems="center"
    inline={!props.wide}
    width={props.wide ? '100%' : null}
  />
))<StyledContentSwitcherProps>`
  ${({ size, theme }) => {
    const aliasTokens = theme.tokens.alias;
    const buttonTokens = theme.tokens.cmp.button;
    const baseSpace = aliasTokens.space.cmp.xs;
    const height = css`calc(${
      buttonTokens.size.height[CONTENT_SWITCHER_ITEM_SIZE_MAP[size]]
    } + ${baseSpace})`;
    const horPadding = css`calc(${baseSpace} / 2)`;
    return css`
      gap: ${aliasTokens.space.cmp.xxs};
      border-radius: ${buttonTokens.shape.borderRadius.medium};
      height: ${height};
      padding: 0 ${horPadding};
      background-color: ${aliasTokens.color.background.track.base};
    `;
  }}
`;
