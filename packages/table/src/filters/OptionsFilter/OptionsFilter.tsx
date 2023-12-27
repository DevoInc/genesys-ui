import * as React from 'react';

import {
  Badge,
  Button,
  Flex,
  HFlex,
  InputControl,
  SelectControl,
  type SelectOption,
} from '@devoinc/genesys-ui';
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from '@devoinc/genesys-ui-form';

import { FilterProps } from '../declarations';
import { getOptionsFromData } from './getOptionsFromData';
import { AdvancedFilter, BasicFilter, FilterContainer } from '../common';

export const OptionsFilter: React.FC<FilterProps> = ({ colDef, data }) => {
  const options =
    (colDef?.cellFilterParams?.options as SelectOption[]) ??
    (getOptionsFromData(data, colDef) as SelectOption[]);

  return (
    <FilterContainer>
      <BasicFilter>
        <SelectControl
          menuAppendToBody
          defaultInputValue={colDef?.cellFilterParams?.defaultValue as string}
          options={options}
        />
      </BasicFilter>
      <AdvancedFilter
        footer={
          <HFlex flex="1">
            <HFlex.Item>
              <RadioGroup direction="row" legend="Kind of logic" hideLegend>
                <Radio
                  defaultChecked
                  size="sm"
                  label="OR"
                  id="or-radio-selector"
                  name="and-or-selector"
                />
                <Radio
                  size="sm"
                  label="AND"
                  id="and-radio-selector"
                  name="and-or-selector"
                />
              </RadioGroup>
            </HFlex.Item>
            <HFlex.Item marginLeft="auto">
              <Button key={1} colorScheme="accent">
                Reset
              </Button>
            </HFlex.Item>
          </HFlex>
        }
        header={
          <InputControl
            aria-label="Filter this options"
            placeholder="Filter options..."
            type="search"
          />
        }
      >
        <CheckboxGroup legend="Column filter options" hideLegend>
          <Checkbox label="[Select all]" id="filter-all" defaultChecked />
          {options.map((option) => (
            <Checkbox
              label={
                <HFlex spacing="cmp-xxs" alignItems="flex-start">
                  <Flex alignItems="center">
                    <Badge size="sm" colorScheme="success" />
                  </Flex>
                  {option.label}
                </HFlex>
              }
              id={String(option.value)}
              key={option.value}
              defaultChecked
            />
          ))}
        </CheckboxGroup>
      </AdvancedFilter>
    </FilterContainer>
  );
};
