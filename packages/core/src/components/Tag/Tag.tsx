import * as React from 'react';

// declarations
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledOverloadCssPropsWithRecord,
  StyledPolymorphicProps,
} from '../../declarations';

// styled
import { StyledTagContainerProps } from './components/StyledTagContainer';

// components
import { TagBadge, TagContainer, TagIcon, TagLabel } from './components';

export interface BaseTagProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps,
    StyledTagContainerProps {
  /** The name of the icon for the tag */
  icon?: string;
  /** Text for the tag */
  text: string;
}

export type TagProps = BaseTagProps &
  StyledOverloadCssPropsWithRecord<'badge' | 'container' | 'icon' | 'label'>;

export const InternalTag: React.FC<TagProps> = ({
  colorScheme = 'neutral',
  icon,
  bold,
  quiet,
  wide,
  size = 'md',
  styles,
  subcomponentStyles,
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
      styles={subcomponentStyles?.container || styles}
      tooltip={tooltip}
    >
      {quiet && (
        <TagBadge
          colorScheme={colorScheme}
          icon={icon}
          size={size}
          styles={subcomponentStyles?.badge}
        />
      )}
      {text && icon && !quiet && (
        <TagIcon
          iconId={icon}
          strong={bold}
          size={size}
          styles={subcomponentStyles?.icon}
        />
      )}
      {text && <TagLabel styles={subcomponentStyles?.label}>{text}</TagLabel>}
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
