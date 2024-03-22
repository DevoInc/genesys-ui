import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
} from '../../../../declarations';

import { StyledListItem } from '../../StyledTypography';

export interface ListItemProps
  extends IGlobalAttrs,
    IGlobalAriaAttrs,
    IStyledOverloadCss {
  children?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  styles,
  tooltip,
  ...nativeProps
}) => (
  <StyledListItem {...nativeProps} css={styles} title={tooltip}>
    {children}
  </StyledListItem>
);
