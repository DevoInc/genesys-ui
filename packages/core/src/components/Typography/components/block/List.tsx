import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../../../declarations';
import * as React from 'react';

import { StyledList, StyledListProps } from '../../StyledTypography';
import { ListItem } from './ListItem';

export interface ListProps
  extends StyledListProps,
    // native
    StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps {
  /** Content of the list */
  children?: React.ReactNode;
}

const InternalList: React.FC<ListProps> = ({
  as,
  colorScheme = 'base',
  gutterBottom = 'cmp-md',
  listStyle = 'unordered',
  size = 'md',
  textAlign = 'left',
  children,
  tooltip,
  ...nativeProps
}) => (
  <StyledList
    {...nativeProps}
    as={as || (listStyle === 'ordered' ? 'ol' : undefined)}
    colorScheme={colorScheme}
    gutterBottom={gutterBottom}
    listStyle={listStyle}
    size={size}
    textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledList>
);

export const List = InternalList as typeof InternalList & {
  Item: typeof ListItem;
};

List.Item = ListItem;
