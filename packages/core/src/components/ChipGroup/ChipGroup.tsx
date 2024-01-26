import * as React from 'react';

import { ChipProps, Form, FormGroupProps } from '../../';
import { WithRequired } from '../../typeFunctions';
import { ChipGroupContext } from './context';
import { ChipGroupChip, ChipGroupChipProps } from './components';

export interface ChipGroupProps
  extends WithRequired<
    Omit<
      FormGroupProps,
      | 'alignItems'
      | 'flexWrap'
      | 'justifyContent'
      | 'itemsGap'
      | 'boxed'
      | 'children'
    >,
    'legend'
  > {
  /** Size to apply to all the children Chips */
  size?: ChipProps['size'];
  /** Selection scheme to apply to all the children Chips */
  selectionScheme?: ChipProps['selectionScheme'];
  children:
    | React.ReactElement<ChipGroupChipProps>
    | React.ReactElement<ChipGroupChipProps>[];
}

export const InternalChipGroup: React.FC<ChipGroupProps> = ({
  children,
  direction = 'row',
  hasLegendLabelFormat = true,
  hasFloatingHelper = false,
  helper,
  hideLegend,
  required,
  selectionScheme,
  legend,
  legendPosition = 'left',
  marginLeft,
  marginTop,
  name,
  size = 'md',
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
    name={name}
    status={status}
  >
    <ChipGroupContext.Provider
      value={{
        name: name ? `${name}__chip` : undefined,
        size,
        selectionScheme,
      }}
    >
      {children}
    </ChipGroupContext.Provider>
  </Form.Group>
);

export const ChipGroup = InternalChipGroup as typeof InternalChipGroup & {
  Chip: typeof ChipGroupChip;
};

ChipGroup.Chip = ChipGroupChip;

InternalChipGroup.displayName = 'ChipGroup';
