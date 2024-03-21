import * as React from 'react';

import type { IContainerEventAttrs } from '../../declarations/htmlEventAttrs';
import { Form, type FormGroupProps } from '../Form';
import { TChoiceGroupColorScheme } from './declarations';
import { ChoiceGroupContext } from './context';
import {
  ChoiceGroupIconButton,
  ChoiceGroupIconButtonProps,
} from './components';

export interface ChoiceGroupProps
  extends Omit<
      FormGroupProps,
      'children' | 'direction' | 'justifyContent' | 'itemsGap' | 'boxed'
    >,
    Pick<IContainerEventAttrs, 'onChange'>,
    Pick<ChoiceGroupIconButtonProps, 'size' | 'selectionScheme'> {
  colorScheme?: TChoiceGroupColorScheme;
  children: React.ReactElement | React.ReactElement[];
}

export const InternalChoiceGroup: React.FC<ChoiceGroupProps> = ({
  alignItems = 'center',
  children,
  colorScheme = 'quiet',
  hasLegendLabelFormat = true,
  hasFloatingHelper = true,
  helper,
  hideLegend,
  required,
  legend,
  legendPosition = 'top',
  marginLeft,
  marginTop,
  selectionScheme = 'multiple',
  status = 'base',
  size = 'md',
  tooltip,
  ...restFormGroupProps
}) => (
  <Form.Group
    {...restFormGroupProps}
    alignItems={alignItems}
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
    tooltip={tooltip}
  >
    <ChoiceGroupContext.Provider value={{ colorScheme, selectionScheme, size }}>
      {children}
    </ChoiceGroupContext.Provider>
  </Form.Group>
);

export const ChoiceGroup = InternalChoiceGroup as typeof InternalChoiceGroup & {
  IconButton: typeof ChoiceGroupIconButton;
};

ChoiceGroup.IconButton = ChoiceGroupIconButton;

InternalChoiceGroup.displayName = 'ChoiceGroup';
