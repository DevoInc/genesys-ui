import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';
import * as React from 'react';

import { StyledList, StyledListProps } from '../../StyledTypography';
import { ListItem } from './ListItem';

export interface ListProps
  extends StyledListProps,
    // native
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps {
  /** Content of the list */
  children?: React.ReactNode;
}

const InternalList: React.FC<ListProps> = ({
  as,
  children,
  colorScheme = 'base',
  gutterBottom = 'cmp-md',
  listStyle = 'unordered',
  size = 'md',
  styles,
  textAlign = 'left',
  tooltip,
  ...nativeProps
}) => (
  <StyledList
    {...nativeProps}
    as={as || (listStyle === 'ordered' ? 'ol' : undefined)}
    colorScheme={colorScheme}
    css={styles}
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
