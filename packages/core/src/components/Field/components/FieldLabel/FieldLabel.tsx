import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IField } from '../../declarations';
import { Label, type LabelProps } from '../../../Label';
import { Flex } from '../../../Flex';

export interface FieldLabelProps
  extends Omit<LabelProps, 'as' | 'size' | 'textAlign' | 'truncated'>,
    Pick<IField, 'labelPosition' | 'size'> {
  /** The helper block: extra info or validation message to fill the form displayed as a floating message. */
  helper?: IField['helper'];
  /** The mark to add at the beginning of the label when the field is required. */
  requiredMark?: React.ReactNode;
}

export const FieldLabel: React.FC<FieldLabelProps> = ({
  children,
  cursor,
  helper,
  htmlFor,
  id,
  labelPosition,
  requiredMark,
  size = 'md',
  srOnly = false,
  style,
  ...nativeProps
}) => {
  // to get vertically aligned the floating helper with the field control block anyway
  const labelHelperHeight =
    useTheme().cmp.field.labelHelper.size.minHeight[size];

  return !(labelPosition === 'right') && helper && !srOnly ? (
    <Flex {...nativeProps} alignItems="center" maxWidth="100%" gap="cmp-xxs">
      <Label
        cursor={cursor}
        htmlFor={htmlFor}
        id={id}
        size={size}
        srOnly={srOnly}
        style={style}
      >
        {requiredMark}
        {children}
      </Label>
      {!srOnly && (
        <Flex
          height={labelHelperHeight}
          inline
          verticalAlign="text-top"
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
      style={style}
      truncated={false}
    >
      {requiredMark}
      {children}
      {!srOnly && helper && (
        <Flex
          height={labelHelperHeight}
          inline
          marginLeft="cmp-xxs"
          verticalAlign="text-top"
        >
          {helper}
        </Flex>
      )}
    </Label>
  );
};
