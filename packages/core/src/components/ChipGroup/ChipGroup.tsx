import * as React from 'react';

import { Form, FormGroupProps } from '../../';
import { WithRequired } from '../../typeFunctions';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChipGroupProps
  extends WithRequired<
    Omit<
      FormGroupProps,
      'alignItems' | 'flexWrap' | 'justifyContent' | 'itemsGap' | 'boxed'
    >,
    'legend'
  > {}

export const ChipGroup: React.FC<ChipGroupProps> = ({
  children,
  direction = 'row',
  hasLegendLabelFormat = true,
  hasFloatingHelper = false,
  helper,
  hideLegend,
  required,
  legend,
  legendPosition = 'left',
  marginLeft,
  marginTop,
  status = 'base',
  ...nativeFormGroupAttrProps
}) => (
  <Form.Group
    {...nativeFormGroupAttrProps}
    direction={direction}
    flexWrap="wrap"
    hasLegendLabelFormat={hasLegendLabelFormat}
    hasFloatingHelper={hasFloatingHelper}
    helper={helper}
    hideLegend={hideLegend}
    required={required}
    itemsGap="xs"
    legend={legend}
    legendPosition={legendPosition}
    marginLeft={marginLeft}
    marginTop={marginTop}
    status={status}
  >
    {children}
  </Form.Group>
);
