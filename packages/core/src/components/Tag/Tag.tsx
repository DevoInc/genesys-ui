import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';

import {
  TagBadge,
  TagContainer,
  type TagContainerProps,
  TagIcon,
  TagLabel,
} from './components';

export interface TagProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    TagContainerProps {
  /** The name of the icon for the tag */
  icon?: React.ReactNode;
  /** Text for the tag */
  text: string;
}

export const InternalTag: React.FC<TagProps> = ({
  colorScheme = 'neutral',
  icon,
  bold,
  quiet,
  wide,
  size = 'md',
  styles,
  text,
  tooltip,
  ...restNativeProps
}) => {
  return (
    <TagContainer
      {...restNativeProps}
      colorScheme={colorScheme}
      bold={bold}
      quiet={quiet}
      wide={wide}
      size={size}
      styles={styles}
      tooltip={tooltip}
    >
      {quiet && <TagBadge colorScheme={colorScheme} icon={icon} size={size} />}
      {text && icon && !quiet && (
        <TagIcon strong={bold} size={size}>
          {icon}
        </TagIcon>
      )}
      {text && <TagLabel>{text}</TagLabel>}
    </TagContainer>
  );
};

export const Tag = InternalTag as typeof InternalTag & {
  _Badge: typeof TagBadge;
  _Container: typeof TagContainer;
  _Icon: typeof TagIcon;
  _Label: typeof TagLabel;
};

Tag._Badge = TagBadge;
Tag._Container = TagContainer;
Tag._Icon = TagIcon;
Tag._Label = TagLabel;

InternalTag.displayName = 'Tag';

Tag._Badge.displayName = 'Tag._Badge';
Tag._Container.displayName = 'Tag._Container';
Tag._Icon.displayName = 'Tag._Icon';
Tag._Label.displayName = 'Tag._Label';
