import * as React from 'react';

// declarations
import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';

// styled
import type { StyledTagContainerProps } from './components/StyledTagContainer';

// components
import { TagBadge, TagContainer, TagIcon, TagLabel } from './components';

export interface TagProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    StyledTagContainerProps {
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
  Badge: typeof TagBadge;
  Container: typeof TagContainer;
  Icon: typeof TagIcon;
  Label: typeof TagLabel;
};

Tag.Badge = TagBadge;
Tag.Container = TagContainer;
Tag.Icon = TagIcon;
Tag.Label = TagLabel;
