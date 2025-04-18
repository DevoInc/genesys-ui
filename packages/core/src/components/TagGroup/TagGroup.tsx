import * as React from 'react';
import { Resolve } from '../../typeFunctions';

import {
  TagGroupContainer,
  type TagGroupContainerProps,
  TagGroupLabel,
  TagGroupList,
  TagGroupTag,
} from './components';
import type { ITagGroup } from './declarations';

export interface TagGroupProps
  extends TagGroupContainerProps,
    Pick<ITagGroup, 'colorScheme' | 'quiet' | 'size'> {
  label?: React.ReactNode;
}

export const InternalTagGroup = React.forwardRef<
  HTMLDivElement,
  Resolve<TagGroupProps>
>(
  (
    {
      'aria-label': ariaLabel,
      children,
      colorScheme,
      flexWrap = 'wrap',
      labelPosition = 'left',
      label,
      quiet,
      size = 'md',
      style,
      ...restProps
    },
    ref,
  ) => (
    <TagGroupContainer
      {...restProps}
      ref={ref}
      colorScheme={colorScheme}
      labelPosition={labelPosition}
      quiet={quiet}
      size={size}
      style={style}
    >
      {label && <TagGroupLabel size={size}>{label}</TagGroupLabel>}
      <TagGroupList
        aria-label={typeof label === 'string' ? label : ariaLabel}
        flexWrap={flexWrap}
        size={size}
      >
        {children}
      </TagGroupList>
    </TagGroupContainer>
  ),
);

export const TagGroup = InternalTagGroup as typeof InternalTagGroup & {
  _Container: typeof TagGroupContainer;
  _Label: typeof TagGroupLabel;
  _List: typeof TagGroupList;
  Tag: typeof TagGroupTag;
};

TagGroup._Container = TagGroupContainer;
TagGroup._Label = TagGroupLabel;
TagGroup._List = TagGroupList;
TagGroup.Tag = TagGroupTag;

InternalTagGroup.displayName = 'TagGroup';
TagGroup._Container.displayName = 'TagGroup._Container';
TagGroup._Label.displayName = 'TagGroup._Label';
TagGroup._List.displayName = 'TagGroup._List';
TagGroup.Tag.displayName = 'TagGroup.Tag';
