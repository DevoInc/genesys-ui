import * as React from 'react';

import { WithRequired } from '../../typeFunctions';

import { Form, FormGroupProps } from '@devoinc/genesys-ui';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioGroupProps
  extends WithRequired<
    Omit<FormGroupProps, 'alignItems' | 'justifyContent' | 'itemsGap'>,
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
