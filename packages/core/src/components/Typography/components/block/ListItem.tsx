import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { StyledListItem } from '../../StyledTypography';

export interface ListItemProps extends GlobalAttrProps, GlobalAriaProps {
  children?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  ...nativeProps
}) => <StyledListItem {...nativeProps}>{children}</StyledListItem>;
