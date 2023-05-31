import * as React from 'react';

// declarations
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';
import { ButtonSize } from '../';

// styled
import {
  StyledButtonGroup,
  StyledButtonGroupItem,
  StyledButtonGroupProps,
} from './StyledButtonGroup';

export interface ButtonGroupProps
  extends StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps,
    StyledButtonGroupProps {
  children: React.ReactElement[];
  /** The size of the buttons */
  size?: ButtonSize;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  hidden = false,
  itemsGap = 'md',
  role,
  size = 'md',
  visibilityTrigger,
  tooltip,
  ...restNativeProps
}) => (
  <StyledButtonGroup
    {...restNativeProps}
    hidden={hidden}
    itemsGap={itemsGap}
    role={role}
    title={tooltip}
    visibilityTrigger={visibilityTrigger}
  >
    {children?.map((child, idx) => (
      <StyledButtonGroupItem
        key={idx}
        quietChildButton={child.props?.colorScheme === 'quiet'}
        size={size}
      >
        {React.cloneElement(child, {
          key: idx,
          size: child.props?.size || size,
        })}
      </StyledButtonGroupItem>
    ))}
  </StyledButtonGroup>
);
