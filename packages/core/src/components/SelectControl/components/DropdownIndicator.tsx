import * as React from 'react';
import {
  components,
  DropdownIndicatorProps as RSDropdownIndicatorProps,
} from 'react-select';

import { Icon } from '../..';
import { showMenuAndDropDown } from '../utils';
import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables.js';

const mapStatusIcon: {
  [key in RSDropdownIndicatorProps['selectProps']['status']]: keyof typeof iconDictionary;
} = {
  base: '' as RSDropdownIndicatorProps['selectProps']['status'],
  error: 'error_warning_danger_stop_filled',
  success: 'ok_successful_check_filled',
  warning: 'attention_error_alert_caution_filled',
} as const;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DropdownIndicatorProps extends RSDropdownIndicatorProps {}

export const DropdownIndicator: React.FC<DropdownIndicatorProps> = ({
  selectProps,
  ...props
}) => {
  return (
    showMenuAndDropDown(selectProps) &&
    components.DropdownIndicator && (
      <components.DropdownIndicator selectProps={selectProps} {...props}>
        {selectProps.status && selectProps.status !== 'base' && (
          <Icon
            iconId={mapStatusIcon[selectProps.status]}
            status={selectProps.status}
            className={`${selectProps.classNamePrefix}__status-icon`}
          />
        )}
        <Icon iconId="arrow_down_fat" />
      </components.DropdownIndicator>
    )
  );
};
