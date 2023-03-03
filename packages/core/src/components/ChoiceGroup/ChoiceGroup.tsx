import * as React from 'react';

import { Form, FormGroupProps } from '../../';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChoiceGroupProps
  extends Omit<
    FormGroupProps,
    'alignItems' | 'direction' | 'justifyContent' | 'itemsGap' | 'boxed'
  > {}

export const ChoiceGroup: React.FC<ChoiceGroupProps> = ({
  children,
  hasLegendLabelFormat = true,
  hasFloatingHelper = true,
  helper,
  hideLegend,
  required,
  legend,
  legendPosition = 'top',
  marginLeft,
  marginTop,
  status = 'base',
}) => (
  <Form.Group
    direction="row"
    hasLegendLabelFormat={hasLegendLabelFormat}
    hasFloatingHelper={hasFloatingHelper}
    helper={helper}
    hideLegend={hideLegend}
    required={required}
    itemsGap="xxs"
    legend={legend}
    legendPosition={legendPosition}
    marginLeft={marginLeft}
    marginTop={marginTop}
    status={status}
  >
    {children}
  </Form.Group>
);
