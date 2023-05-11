import * as React from 'react';
import {
  components,
  DropdownIndicatorProps as RSDropdownIndicatorProps,
} from 'react-select';

import { Icon } from '../..';
import { showMenuAndDropDown } from '../utils';
import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables.js';
import { SelectOption } from '../declarations';

const mapStatusIcon: {
  [key in RSDropdownIndicatorProps['selectProps']['status']]: keyof typeof iconDictionary;
} = {
  base: '' as RSDropdownIndicatorProps['selectProps']['status'],
  error: 'error_warning_danger_stop_filled',
  success: 'ok_successful_check_filled',
  warning: 'attention_error_alert_caution_filled',
} as const;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DropdownIndicatorProps<Option>
  extends RSDropdownIndicatorProps<Option> {}

export const DropdownIndicator = <Option extends SelectOption>({
  selectProps,
  ...props
}: DropdownIndicatorProps<Option>): React.ReactElement<
  DropdownIndicatorProps<Option>
> => {
  return (
    showMenuAndDropDown<Option>(selectProps) &&
    components.DropdownIndicator && (
      <components.DropdownIndicator selectProps={selectProps} {...props}>
        {selectProps.status && selectProps.status !== 'base' && (
          <Icon
            iconId={mapStatusIcon[selectProps.status]}
            colorScheme={selectProps.status}
            className={`${selectProps.classNamePrefix}__status-icon`}
          />
        )}
        <Icon iconId="arrow_down_fat" />
      </components.DropdownIndicator>
    )
  );
};
