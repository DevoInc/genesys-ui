import * as React from 'react';

import { WithRequired } from '../../typeFunctions';

import { Form, type FormGroupProps } from '../Form';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxGroupProps
  extends WithRequired<
    Omit<FormGroupProps, 'alignItems' | 'justifyContent' | 'itemsGap'>,
    'legend'
  > {}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  direction = 'column',
  hasLegendLabelFormat = true,
  status = 'base',
  ...restFormGroupProps
}) => (
  <Form.Group
    {...restFormGroupProps}
    asFieldset
    direction={direction}
    hasLegendLabelFormat={hasLegendLabelFormat}
    itemsGap={direction === 'row' ? 'md' : 'xs'}
    status={status}
  >
    {children}
  </Form.Group>
);
