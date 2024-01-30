import * as React from 'react';
import {
  FieldSize,
  FieldStatus,
  GlobalAttrProps,
  MouseEventAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations';
import { Flex } from '../../Flex';
import { FieldContext } from '../context';
import { FieldLabelDistributorProps } from './FieldLabelDistributor';
import { LabelPosition } from '../declarations';

export interface FieldContainerProps
  extends MouseEventAttrProps,
    StyledOverloadCssProps,
    StyledPolymorphicProps,
    Pick<GlobalAttrProps, 'tooltip' | 'role'>,
    Pick<FieldLabelDistributorProps, 'direction'> {
  children: React.ReactNode;
  /** If the field control is rendered filling all the available space (e.g. Input component) or only its own width (e.g. Switch component). */
  hasWideControl?: boolean;
  /** Position of the label text relative to the input control. The position 'right' for the label is only recommended for checkbox and radio controls. */
  labelPosition?: LabelPosition;
  /** Size of the input: height, padding, font-size... etc. */
  size?: FieldSize;
  /** This property defines the status color schema for the Field._ */
  status?: FieldStatus;
}

export const FieldContainer: React.FC<FieldContainerProps> = ({
  children,
  direction = 'column',
  hasWideControl = true,
  labelPosition = 'top',
  size = 'md',
  status = 'base',
  ...restProps
}) => (
  <Flex
    {...restProps}
    alignItems={'stretch'}
    flexDirection={'column'}
    gap={'cmp-xxs'}
  >
    <FieldContext.Provider
      value={{ direction, hasWideControl, labelPosition, size, status }}
    >
      {children}
    </FieldContext.Provider>
  </Flex>
);
