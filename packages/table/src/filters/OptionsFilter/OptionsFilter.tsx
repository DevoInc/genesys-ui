import * as React from 'react';

import {
  Badge,
  Button,
  Flex,
  HFlex,
  InputControl,
  SelectControl,
} from '@devoinc/genesys-ui';
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from '@devoinc/genesys-ui-form';

import { FilterProps } from '../declarations';
import { AdvancedFilter, BasicFilter, FilterContainer } from '../common';
import { ContextOptions, getSelectOptions } from '../../facade';

export const OptionsFilter: React.FC<FilterProps> = ({ colDef }) => {
  const options = (colDef?.context as ContextOptions)?.options ?? {};

  return (
    <FilterContainer>
      <BasicFilter>
        <SelectControl
          menuAppendToBody
          defaultInputValue={colDef?.context?.defaultValue as string}
          options={getSelectOptions(options)}
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
          {Object.entries(options).map(([key, option]) => (
            <Checkbox
              label={
                option.colorScheme ? (
                  <HFlex spacing="cmp-xxs" alignItems="flex-start">
                    <Flex alignItems="center">
                      <Badge size="sm" colorScheme={option.colorScheme} />
                    </Flex>
                    {option.label ?? key}
                  </HFlex>
                ) : (
                  option.label ?? key
                )
              }
              id={key}
              key={key}
              defaultChecked
            />
          ))}
        </CheckboxGroup>
      </AdvancedFilter>
    </FilterContainer>
  );
};
