import styled, { css } from 'styled-components';

import { Icon, IconProps } from '../../../../Icon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledTabsIconProps extends IconProps {}

export const StyledTabsIcon = styled(Icon)`
  ${({ theme }) => {
    return css`
      margin-right: ${theme.cmp.tabs.item.space.margin.iconToText};
    `;
  }}
`;
