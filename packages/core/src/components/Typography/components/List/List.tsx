import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

import { StyledList } from './StyledList';
import { ListItem } from '../ListItem';
import type { ITypography } from '../../declarations';

export interface ListProps
  extends Pick<
      ITypography,
      | 'colorScheme'
      | 'gutterBottom'
      | 'listStyle'
      | 'textAlign'
      | 'truncateLine'
    >,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
  /** Content of the list */
  children?: React.ReactNode;
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
}

const InternalList: React.FC<ListProps> = ({
  as,
  children,
  colorScheme = 'base',
  gutterBottom,
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
    $colorScheme={colorScheme}
    css={style}
    $gutterBottom={gutterBottom}
    $listStyle={listStyle}
    $size={size}
    $textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledList>
);

export const List = InternalList as typeof InternalList & {
  Item: typeof ListItem;
};

List.Item = ListItem;
