import * as React from 'react';

import { TagProps } from '../Tag';
import { StyledOverloadCssPropsWithRecord } from '../../';

import {
  TagGroupContainer,
  TagGroupContainerProps,
  TagGroupLabel,
  TagGroupLabelProps,
  TagGroupList,
  TagGroupListProps,
} from './components';

export interface BaseTagGroupProps
  extends Omit<TagGroupContainerProps, 'children'>,
    Pick<TagGroupListProps, 'children'>,
    Pick<TagProps, 'size'> {
  /** Text within the label. (aria-label is the same as Label) */
  label?: TagGroupLabelProps['children'];
}

export type TagGroupProps = BaseTagGroupProps &
  StyledOverloadCssPropsWithRecord<'container' | 'label' | 'list'>;

export const InternalTagGroup: React.FC<TagGroupProps> = ({
  children,
  labelPosition = 'left',
  label,
  size = 'md',
  styles,
  subcomponentStyles,
  ...restNativeProps
}) => {
  return (
    <TagGroup.Container
      {...restNativeProps}
      labelPosition={labelPosition}
      styles={subcomponentStyles?.container || styles}
    >
      {label && (
        <TagGroup.Label size={size} styles={subcomponentStyles?.label}>
          {label}
        </TagGroup.Label>
      )}
      <TagGroup.List styles={subcomponentStyles?.list} size={size}>
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
