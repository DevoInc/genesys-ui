import * as React from 'react';

import { StyledListItem } from './StyledListItem';
import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
} from '../../../../declarations';

export interface ListItemProps
  extends IGlobalAttrs,
    IGlobalAriaAttrs,
    IStyledOverloadCss {
  children?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  style,
  tooltip,
  ...nativeProps
}) => (
  <StyledListItem {...nativeProps} css={style} title={tooltip}>
    {children}
  </StyledListItem>
);
