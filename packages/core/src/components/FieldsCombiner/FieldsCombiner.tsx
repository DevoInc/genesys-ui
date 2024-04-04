import * as React from 'react';
import { useTheme } from 'styled-components';

import { Field, type FieldProps } from '../Field';
import { Popover } from '../Popover';

import { FieldsCombinerElemContext } from './context';
import {
  FieldsCombinerButton,
  FieldsCombinerCheckbox,
  FieldsCombinerIconButton,
  FieldsCombinerInput,
  FieldsCombinerItem,
  FieldsCombinerSelect,
} from './components';
import { HFlex } from '../HFlex';

export interface FieldsCombinerProps
  extends Omit<FieldProps, 'children' | 'controlWidth' | 'hasWideControl'> {
  children: [React.ReactNode, React.ReactNode];
}

export const InternalFieldsCombiner: React.FC<FieldsCombinerProps> = ({
  status = 'base',
  label,
  id,
  role,
  size = 'md',
  children,
  ...restFieldProps
}) => {
  const hasTriggerType = (elem) => {
    const elemTypeName = elem?.type?.displayName;
    return (
      elemTypeName === FieldsCombinerButton.displayName ||
      elemTypeName === FieldsCombinerIconButton.displayName ||
      elemTypeName === Popover.displayName
    );
  };

  const combinedButtons =
    hasTriggerType(children[0]) && hasTriggerType(children[1]);

  const theme = useTheme();

  return (
    <Field
      {...restFieldProps}
      id={id}
      label={label}
      size={size}
      role={role || 'group'}
      status={status}
    >
      <HFlex spacing="0" flex="1 1 100%">
        <FieldsCombinerElemContext.Provider
          value={{
            order: 'first',
            combinedButtons,
            size,
            status,
            theme,
          }}
        >
          {children[0]}
        </FieldsCombinerElemContext.Provider>
        <FieldsCombinerElemContext.Provider
          value={{
            order: 'last',
            combinedButtons,
            size,
            status,
            theme,
          }}
        >
          {children[1]}
        </FieldsCombinerElemContext.Provider>
      </HFlex>
    </Field>
  );
};

export const FieldsCombiner =
  InternalFieldsCombiner as typeof InternalFieldsCombiner & {
    Button: typeof FieldsCombinerButton;
    IconButton: typeof FieldsCombinerIconButton;
    Item: typeof FieldsCombinerItem;
    Input: typeof FieldsCombinerInput;
    Select: typeof FieldsCombinerSelect;
    Checkbox: typeof FieldsCombinerCheckbox;
  };

FieldsCombiner.Button = FieldsCombinerButton;
FieldsCombiner.IconButton = FieldsCombinerIconButton;
FieldsCombiner.Item = FieldsCombinerItem;
FieldsCombiner.Input = FieldsCombinerInput;
FieldsCombiner.Select = FieldsCombinerSelect;
FieldsCombiner.Checkbox = FieldsCombinerCheckbox;

FieldsCombiner.displayName = 'FieldsCombiner';
