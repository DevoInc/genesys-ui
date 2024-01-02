import * as React from 'react';

import { Flex } from '../../..';
import { StyledOverloadCssProps } from '../../../../declarations';

export interface AppBarActionsProps extends StyledOverloadCssProps {
  id: string;
  /** Actions content */
  children: React.ReactNode;
}

export const AppBarActions: React.FC<AppBarActionsProps> = ({
  id,
  children,
  styles,
}) => (
  <Flex.Item
    id={id ? `${id}__actions` : null}
    marginLeft="auto"
    styles={styles}
  >
    {children}
  </Flex.Item>
);
