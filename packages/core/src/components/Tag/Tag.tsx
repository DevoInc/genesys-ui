import * as React from 'react';

// declarations
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';

// styled
import {
  StyledTag,
  StyledTagBadge,
  StyledTagIcon,
  StyledTagProps,
  StyledTagText,
} from './StyledTag';

export interface TagProps
  extends StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps,
    StyledTagProps {
  /** The name of the icon for the tag */
  icon?: string;
  /** Text for the tag */
  text: string;
}

export const Tag: React.FC<TagProps> = ({
  colorScheme = 'neutral',
  icon,
  bold,
  quiet,
  wide,
  size = 'md',
  text,
  tooltip,
  ...restNativeProps
}) => {
  return (
    <StyledTag
      {...restNativeProps}
      colorScheme={colorScheme}
      bold={bold}
      quiet={quiet}
      wide={wide}
      size={size}
      title={tooltip}
    >
      {quiet && (
        <StyledTagBadge colorScheme={colorScheme} icon={icon} size={size} />
      )}
      {text && icon && !quiet && (
        <StyledTagIcon
          className={icon}
          aria-hidden={true}
          bold={bold}
          size={size}
        />
      )}
      {text && <StyledTagText>{text}</StyledTagText>}
    </StyledTag>
  );
};
