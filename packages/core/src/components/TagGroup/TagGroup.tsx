import * as React from 'react';

// components
import { Label } from '../Label';

// declarations
import { TagProps } from '../Tag';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../';

// styled
import {
  StyledTagGroup,
  StyledTagGroupLabel,
  StyledTagGroupLabelProps,
  StyledTagGroupList,
  StyledTagGroupProps,
} from './StyledTagGroup';

export interface TagGroupProps
  extends StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps,
    StyledTagGroupProps,
    Omit<StyledTagGroupLabelProps, 'labelPosition'> {
  /** Polymorphic prop to create a different tag or styled component
   * https://styled-components.com/docs/api#as-polymorphic-prop */
  children: React.ReactElement<TagProps>[];
  /** Text within the label. (aria-label is the same as Label) */
  labelText?: string;
}

export const TagGroup: React.FC<TagGroupProps> = ({
  children,
  labelPosition = 'left',
  labelText,
  role = 'group',
  size = 'md',
  tooltip,
  ...restNativeProps
}) => {
  return (
    <StyledTagGroup
      {...restNativeProps}
      labelPosition={labelPosition}
      role={role}
      title={tooltip}
    >
      {labelText && (
        <StyledTagGroupLabel
          as={Label}
          size={size}
          labelPosition={labelPosition}
        >
          {labelText}
        </StyledTagGroupLabel>
      )}
      <StyledTagGroupList size={size}>
        {children?.map((child, idx) =>
          React.cloneElement(child, {
            key: idx,
            size: size,
          })
        )}
      </StyledTagGroupList>
    </StyledTagGroup>
  );
};
