import * as React from 'react';

import type { TagProps } from '../Tag';

import {
  TagGroupContainer,
  type TagGroupContainerProps,
  TagGroupLabel,
  type TagGroupLabelProps,
  TagGroupList,
  type TagGroupListProps,
} from './components';

export interface TagGroupProps
  extends Omit<TagGroupContainerProps, 'children'>,
    Pick<TagGroupListProps, 'children'>,
    Pick<TagProps, 'size'> {
  /** Text within the label. (aria-label is the same as Label) */
  label?: TagGroupLabelProps['children'];
}

export const InternalTagGroup: React.FC<TagGroupProps> = ({
  children,
  flexWrap = 'wrap',
  labelPosition = 'left',
  label,
  size = 'md',
  styles,
  ...restNativeProps
}) => {
  return (
    <TagGroup.Container
      {...restNativeProps}
      labelPosition={labelPosition}
      styles={styles}
    >
      {label && <TagGroup.Label size={size}>{label}</TagGroup.Label>}
      <TagGroup.List flexWrap={flexWrap} size={size}>
        {children}
      </TagGroup.List>
    </TagGroup.Container>
  );
};

export const TagGroup = InternalTagGroup as typeof InternalTagGroup & {
  Container: typeof TagGroupContainer;
  Label: typeof TagGroupLabel;
  List: typeof TagGroupList;
};

TagGroup.Container = TagGroupContainer;
TagGroup.Label = TagGroupLabel;
TagGroup.List = TagGroupList;
