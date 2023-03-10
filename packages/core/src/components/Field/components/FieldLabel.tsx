import * as React from 'react';
import { useTheme } from 'styled-components';

import { LabelPosition } from '../declarations';
import {
  FieldSize,
  GlobalAriaProps,
  GlobalAttrProps,
} from '../../../declarations';

import { Flex, Label, LabelProps } from '../../';

export interface FieldLabelProps
  extends Omit<
      LabelProps,
      'as' | 'className' | 'forwardedAs' | 'size' | 'textAlign' | 'truncated'
    >,
    GlobalAttrProps,
    GlobalAriaProps {
  /** The helper block: extra info or validation message to fill the form displayed as a floating message. */
  helper?: React.ReactNode;
  /** The mark to add at the beginnig of the label when the field is required. */
  requiredMark?: React.ReactNode;
  /** Position of the label text relative to the field control */
  labelPosition?: LabelPosition;
  /** Size of the input: height, padding, font-size... etc. */
  size?: FieldSize;
}

export const FieldLabel: React.FC<FieldLabelProps> = ({
  children,
  cursor,
  helper,
  htmlFor,
  id,
  labelPosition = 'top',
  requiredMark,
  size = 'md',
  srOnly = false,
  ...nativeProps
}) => {
  // to get vertically aligned the label with the field control block anyway
  const labelLineHeight = useTheme().tokens.alias.typo.lineHeight.body[size];

  return !(labelPosition === 'right') && helper ? (
    <Flex {...nativeProps} alignItems="center" maxWidth="100%" gap="cmp-xxs">
      <Label
        cursor={cursor}
        htmlFor={htmlFor}
        id={id}
        size={size}
        srOnly={srOnly}
      >
        {requiredMark}
        {children}
      </Label>
      {!srOnly && (
        <Flex
          height={labelLineHeight}
          inline
          verticalAlign="middle"
          alignItems="center"
        >
          {helper}
        </Flex>
      )}
    </Flex>
  ) : (
    <Label
      cursor={cursor}
      htmlFor={htmlFor}
      id={id}
      size={size}
      srOnly={srOnly}
      truncated={false}
    >
      {requiredMark}
      {children}
      {!srOnly && helper && (
        <Flex
          height={labelLineHeight}
          inline
          marginLeft="cmp-xxs"
          verticalAlign="middle"
        >
          {helper}
        </Flex>
      )}
    </Label>
  );
};
