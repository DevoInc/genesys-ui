import * as React from 'react';
import { useTheme } from 'styled-components';

import { LabelPosition } from '../declarations';
import {
  FieldSize,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
} from '../../../declarations';

import { Label, LabelProps } from '../../Label';
import { Flex } from '../../Flex';
import { FieldContext } from '../context';

export interface FieldLabelProps
  extends Omit<LabelProps, 'as' | 'size' | 'textAlign' | 'truncated'>,
    GlobalAttrProps,
    GlobalAriaProps,
    StyledOverloadCssProps {
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
  labelPosition,
  requiredMark,
  size,
  srOnly = false,
  styles,
  ...nativeProps
}) => {
  // to get vertically aligned the label with the field control block anyway
  const labelLineHeight = useTheme().alias.typo.lineHeight.body[size];
  const context = React.useContext(FieldContext);
  const evalSize = size || context.size;
  const evalLabelPosition = labelPosition || context.labelPosition;

  return !(evalLabelPosition === 'right') && helper && !srOnly ? (
    <Flex {...nativeProps} alignItems="center" maxWidth="100%" gap="cmp-xxs">
      <Label
        cursor={cursor}
        htmlFor={htmlFor}
        id={id}
        size={evalSize}
        srOnly={srOnly}
        styles={styles}
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
      size={evalSize}
      srOnly={srOnly}
      styles={styles}
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
