import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

import { StyledList, type StyledListProps } from './StyledList';
import { ListItem } from '../ListItem';

export interface ListProps
  extends StyledListProps,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
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
  style,
  textAlign = 'left',
  tooltip,
  ...nativeProps
}) => (
  <StyledList
    {...nativeProps}
    as={as || (listStyle === 'ordered' ? 'ol' : undefined)}
    colorScheme={colorScheme}
    style={style}
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
