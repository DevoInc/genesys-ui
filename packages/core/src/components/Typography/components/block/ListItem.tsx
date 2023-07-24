import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
} from '../../../../declarations';
import * as React from 'react';

import { StyledListItem } from '../../StyledTypography';

export interface ListItemProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    StyledOverloadCssProps {
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
