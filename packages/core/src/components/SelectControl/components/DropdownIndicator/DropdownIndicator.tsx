import * as React from 'react';
import { useTheme } from 'styled-components';
import {
  components,
  DropdownIndicatorProps as RSDropdownIndicatorProps,
} from 'react-select';

import { GIAngleDown } from '@devoinc/genesys-icons';

import { STATUS_ICON_MAP } from '../../../../constants';
import type { TSelectOption } from '../../declarations';
import type { InnerSelectControlProps } from '../../InnerSelectControl';
import { showMenuAndDropDown } from '../../utils';
import { getFontSize } from '../../../../styled';
import { Icon } from '../../../Icon';
import { Flex } from '../../../Flex';

const mapStatusIcon: {
  [key in RSDropdownIndicatorProps['selectProps']['status']]: React.ReactNode;
} = {
  base: '' as RSDropdownIndicatorProps['selectProps']['status'],
  error: STATUS_ICON_MAP.filled.error,
  success: STATUS_ICON_MAP.filled.success,
  warning: STATUS_ICON_MAP.filled.warning,
} as const;

export interface DropdownIndicatorProps<Option>
  extends RSDropdownIndicatorProps<Option>,
    Pick<InnerSelectControlProps, 'hideStatusIcon'> {}

export const DropdownIndicator = <Option extends TSelectOption>({
  selectProps,
  ...props
}: DropdownIndicatorProps<Option>): React.ReactElement<
  DropdownIndicatorProps<Option>
> => {
  const theme = useTheme();
  const dropdownIconSize = getFontSize({
    tokens: theme,
    $size: selectProps.size,
  });
  return (
    showMenuAndDropDown<Option>(selectProps) &&
    components.DropdownIndicator && (
      <components.DropdownIndicator selectProps={selectProps} {...props}>
        {selectProps.status &&
          selectProps.status !== 'base' &&
          !selectProps.hideStatusIcon && (
            <Icon colorScheme={selectProps.status} size="1.6rem">
              {mapStatusIcon[selectProps.status]}
            </Icon>
          )}
        <Flex as="span">
          <Icon size={dropdownIconSize} strong>
            <GIAngleDown />
          </Icon>
        </Flex>
      </components.DropdownIndicator>
    )
  );
};
