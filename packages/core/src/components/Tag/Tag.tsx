import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyleAttr,
  IPolymorphic,
} from '../../declarations';
import {
  TagBadge,
  TagContainer,
  type TagContainerProps,
  TagIcon,
  TagLabel,
} from './components';

export interface TagProps
  extends IPolymorphic,
    IStyleAttr,
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
  style,
  text,
  tooltip,
  ...restNativeProps
}) => {
  const iconSquareSize = `var(--cmp-tag-icon-size-square-${size})`;
  const marginRight = `var(--cmp-tag-icon-space-margin-right-${size})`;
  return (
    <Tag._Container
      {...restNativeProps}
      colorScheme={colorScheme}
      bold={bold}
      quiet={quiet}
      wide={wide}
      size={size}
      style={style}
      tooltip={tooltip}
    >
      {quiet && <TagBadge colorScheme={colorScheme} icon={icon} size={size} />}
      {text && icon && !quiet && (
        <Tag._Icon
          strong={bold}
          style={{
            marginRight: marginRight,
            width: iconSquareSize,
            height: iconSquareSize,
          }}
        >
          {icon}
        </Tag._Icon>
      )}
      {text && <Tag._Label>{text}</Tag._Label>}
    </Tag._Container>
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
