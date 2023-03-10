import * as React from 'react';

import {
  Button,
  Field,
  FieldProps,
  IconButton,
  InputControl,
  Select2Control,
  CheckboxControl,
  InputControlProps,
  ButtonProps,
  IconButtonProps,
  Select2ControlProps,
  CheckboxControlProps,
} from '@devoinc/genesys-ui';

import { Input, InputProps } from '../';

import {
  StyledFieldsCombinerElem,
  StyledFieldsCombinerWrapper,
} from './styled';

export interface FieldsCombinerProps extends Omit<FieldProps, 'children'> {
  /** Field/component to the left of the group */
  leftElem: React.ReactElement<
    | ButtonProps
    | IconButtonProps
    | InputControlProps
    | InputProps
    | Select2ControlProps
    | CheckboxControlProps
  >;
  leftElemWidth?: string;
  margin?: string;
  /** Field/component to the left of the group */
  rightElem: React.ReactElement<
    | ButtonProps
    | IconButtonProps
    | InputControlProps
    | InputProps
    | Select2ControlProps
    | CheckboxControlProps
  >;
  /** Width of the Field/component to the left of the group */
  rightElemWidth?: string;
  /** The width of the component */
  width?: string;
}

export const FieldsCombiner: React.FC<FieldsCombinerProps> = ({
  // Field
  hasFloatingHelper,
  helper,
  required,
  status = 'base',
  hideLabel,
  labelPosition,
  label,
  // Common
  id,
  size = 'md',
  // FieldCombiner
  leftElem,
  leftElemWidth,
  rightElem,
  rightElemWidth,
  ...props
}) => {
  const elemType = (elem) => {
    const elemTypeName = elem?.type?.displayName;
    if (
      elemTypeName === Button.displayName ||
      elemTypeName === IconButton.displayName
    ) {
      return 'button';
    } else if (
      elem.type === Select2Control ||
      elem.type === Input ||
      elem.type === InputControl
    ) {
      return 'field';
    } else if (elem.type === CheckboxControl) {
      return 'check';
    } else {
      return 'other';
    }
  };

  const RightElement = rightElem;
  const LeftElement = leftElem;

  return (
    <Field
      hasFloatingHelper={hasFloatingHelper}
      helper={helper}
      hideLabel={hideLabel}
      id={id}
      label={label}
      labelPosition={labelPosition}
      required={required}
      size={size}
      status={status}
    >
      <StyledFieldsCombinerWrapper>
        <StyledFieldsCombinerElem
          elemWidth={leftElemWidth}
          first
          size={size}
          status={status}
          typeProp={elemType(leftElem)}
          {...props}
        >
          {LeftElement &&
            React.cloneElement(LeftElement, {
              hideLabel: true,
              size,
              status,
              ...props,
            })}
        </StyledFieldsCombinerElem>
        <StyledFieldsCombinerElem
          elemWidth={rightElemWidth}
          size={size}
          status={status}
          typeProp={elemType(rightElem)}
          {...props}
        >
          {RightElement &&
            React.cloneElement(RightElement, {
              hideLabel: true,
              size,
              status,
              ...props,
            })}
        </StyledFieldsCombinerElem>
      </StyledFieldsCombinerWrapper>
    </Field>
  );
};
