import * as React from 'react';
import styled, { css } from 'styled-components';

import { StyledBox } from '../../Box/StyledBox';
import { TabsItemProps } from '../subcomponents';

export interface StyledTabsContentProps {
  /** Array of TabItems */
  children?: React.ReactElement<TabsItemProps | any>[];
}

const ForwardedStyledComponent = React.forwardRef<
  HTMLUListElement,
  StyledTabsContentProps
>((props, ref) => (
  <StyledBox {...props} $display="flex" as="ul" role="tablist" ref={ref} />
));

ForwardedStyledComponent.displayName = 'ForwardedStyledComponent';

export const StyledTabsContent = styled(ForwardedStyledComponent)`
  ${({ theme }) => {
    const tokens = theme.cmp.tabs.content;
    return css`
      width: 100%;
      margin: 0 -${tokens.space.padding};
    `;
  }}
`;
