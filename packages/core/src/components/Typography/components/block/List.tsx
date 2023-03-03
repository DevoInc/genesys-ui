import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../../../declarations';
import * as React from 'react';

import { StyledList, StyledListProps } from '../../StyledTypography';

export interface ListProps
  extends StyledListProps,
    // native
    StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps {
  /** Content of the list */
  children?: React.ReactNode;
}

export const List: React.FC<ListProps> = ({
  as,
  colorScheme = 'base',
  gutterBottom = 'cmp-md',
  listStyle = 'unordered',
  size = 'md',
  textAlign = 'left',
  children,
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
  >
    {children}
  </StyledList>
);
