import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  Button,
  Field,
  FieldProps,
  IconButton,
  InputControl,
  SelectControl,
  CheckboxControl,
  ButtonProps,
  IconButtonProps,
  SelectControlProps,
  CheckboxControlProps,
} from '@devoinc/genesys-ui';

import {
  fieldsCombinerButtonMixin,
  fieldsCombinerInputAndSelectMixin,
} from './helpers';

import {
  StyledFieldsCombinerElem,
  StyledFieldsCombinerWrapper,
} from './styled';

export interface FieldsCombinerProps extends Omit<FieldProps, 'children'> {
  /** Field/component to the left of the group */
  leftElem: React.ReactElement<
    | ButtonProps
    | IconButtonProps
    | React.ComponentPropsWithoutRef<typeof InputControl.Input>
    | SelectControlProps
    | CheckboxControlProps
  >;
  leftElemWidth?: string;
  margin?: string;
  /** Field/component to the left of the group */
  rightElem: React.ReactElement<
    | ButtonProps
    | IconButtonProps
    | React.ComponentPropsWithoutRef<typeof InputControl.Input>
    | SelectControlProps
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
  styles,
  // Common
  id,
  size = 'md',
  // FieldCombiner
  leftElem,
  leftElemWidth,
  rightElem,
  rightElemWidth,
  tooltip,
  ...props
}) => {
  const RightElement = rightElem;
  const LeftElement = leftElem;

  const elemType = (elem) => {
    const elemTypeName = elem?.type?.displayName;
    if (
      elemTypeName === Button.displayName ||
      elemTypeName === IconButton.displayName
    ) {
      return 'button';
    } else if (
      elem.type === SelectControl ||
      elem.type === InputControl.Input
    ) {
      return 'field';
    } else if (elem.type === CheckboxControl) {
      return 'check';
    } else {
      return 'other';
    }
  };
  const theme = useTheme();
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
      styles={styles}
      tooltip={tooltip}
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
              size,
              status,
              styles:
                elemType(leftElem) === 'field'
                  ? fieldsCombinerInputAndSelectMixin({
                      first: true,
                      size,
                      status,
                      theme,
                    })
                  : elemType(leftElem) === 'button'
                    ? fieldsCombinerButtonMixin({
                        first: true,
                        size,
                        status,
                        theme,
                      })
                    : null,
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
              size,
              status,
              styles:
                elemType(rightElem) === 'field'
                  ? fieldsCombinerInputAndSelectMixin({
                      first: false,
                      size,
                      status,
                      theme,
                    })
                  : elemType(rightElem) === 'button'
                    ? fieldsCombinerButtonMixin({
                        first: false,
                        size,
                        status,
                        theme,
                      })
                    : null,
              ...props,
            })}
        </StyledFieldsCombinerElem>
      </StyledFieldsCombinerWrapper>
    </Field>
  );
};
