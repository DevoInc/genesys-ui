import * as React from 'react';

import { WithRequired } from '../../typeFunctions';
import { Form, type FormGroupProps } from '../Form';

export interface RadioGroupProps
  extends WithRequired<
    Omit<
      FormGroupProps,
      'alignItems' | 'asFieldset' | 'justifyContent' | 'itemsGap'
    >,
    'legend'
  > {}

export const RadioGroup: React.FC<RadioGroupProps> = ({
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
    role="radiogroup"
    status={status}
  >
    {children}
  </Form.Group>
);
