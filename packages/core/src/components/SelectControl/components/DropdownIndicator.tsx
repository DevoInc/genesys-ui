import * as React from 'react';
import {
  components,
  DropdownIndicatorProps as RSDropdownIndicatorProps,
} from 'react-select';

import { Icon } from '../..';
import { showMenuAndDropDown } from '../utils';
import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables';
import { SelectOption } from '../declarations';
import { STATUS_ICON_MAP } from '../../../constants';
import { InnerSelectControlProps } from '../InnerSelectControl';

const mapStatusIcon: {
  [key in RSDropdownIndicatorProps['selectProps']['status']]: keyof typeof iconDictionary;
} = {
  base: '' as RSDropdownIndicatorProps['selectProps']['status'],
  error: STATUS_ICON_MAP.filled.error,
  success: STATUS_ICON_MAP.filled.error,
  warning: STATUS_ICON_MAP.filled.warning,
} as const;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DropdownIndicatorProps<Option>
  extends RSDropdownIndicatorProps<Option>,
    Pick<InnerSelectControlProps, 'hideStatusIcon'> {}

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
        {selectProps.status &&
          selectProps.status !== 'base' &&
          !selectProps.hideStatusIcon && (
            <Icon
              iconId={mapStatusIcon[selectProps.status]}
              colorScheme={selectProps.status}
              size="1.6rem"
            />
          )}
        <Icon iconId="gi-angle_down" />
      </components.DropdownIndicator>
    )
  );
};
