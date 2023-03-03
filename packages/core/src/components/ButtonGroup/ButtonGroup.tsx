import * as React from 'react';

// declarations
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';
import { ButtonProps, ButtonSize, IconButtonProps } from '../';

// TODO add the DropDownMenuProps to the possible types for children
//import DropDownMenu from '../DropDownMenu';

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
  children: (
    | React.ReactElement<ButtonProps>
    | React.ReactElement<IconButtonProps>
  )[];
  /** The size of the buttons */
  size?: ButtonSize;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  hidden = false,
  itemsGap = 'md',
  role = 'group',
  size = 'md',
  visibilityTrigger,
  ...restNativeProps
}) => {
  return (
    <StyledButtonGroup
      {...restNativeProps}
      hidden={hidden}
      itemsGap={itemsGap}
      role={role}
      size={size}
      visibilityTrigger={visibilityTrigger}
    >
      {children?.map((child, idx) => (
        <StyledButtonGroupItem
          key={idx}
          quietChildButton={child.props.colorScheme === 'quiet'}
          size={size}
        >
          {React.cloneElement(child, {
            key: idx,
            size: size,
          })}
        </StyledButtonGroupItem>
      ))}
    </StyledButtonGroup>
  );
};
