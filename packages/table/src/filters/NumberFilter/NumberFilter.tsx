import * as React from 'react';

import {
  HFlex,
  IconButton,
  InputControl,
  Menu,
  Popover,
} from '@devoinc/genesys-ui';
import { FilterContainer, numberOptions, NUMBER_ADDON_MAP } from '../common';
import type { FilterContext, FilterProps } from '../../declarations';
import type { NumberFilterValue } from './declarations';
import { GIExitClose, GIFilter } from '@devoinc/genesys-icons';

export const NumberFilter: React.FC<FilterProps> = ({ colDef, onChange }) => {
  const context = colDef?.context as FilterContext;
  const filterValue = context?.filterValue as NumberFilterValue;
  const value = filterValue?.value ?? '';
  const secondValue = filterValue?.secondValue ?? '';
  const operator = filterValue?.operator ?? 'equals';
  return (
    <FilterContainer>
      <HFlex.Item flex="1 1 auto">
        <InputControl
          size="sm"
          aria-label="filter"
          placeholder={operator === 'between' ? 'From...' : 'Filter content...'}
          type="number"
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(
              {
                value: event.currentTarget.value,
                secondValue,
                operator,
              } as NumberFilterValue,
              'number',
            );
          }}
          addonToLeft={NUMBER_ADDON_MAP[operator] as string}
        />
      </HFlex.Item>
      {operator === 'between' && (
        <HFlex.Item flex="1 1 auto">
          <InputControl
            size="sm"
            aria-label="filter"
            placeholder="To..."
            type="number"
            value={secondValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChange(
                {
                  value,
                  secondValue: event.currentTarget.value,
                  operator,
                } as NumberFilterValue,
                'number',
              );
            }}
          />
        </HFlex.Item>
      )}

      {(context?.showReset ?? true) &&
        (value !== '' || operator !== 'equals') && (
          <HFlex.Item flex="0 0 auto">
            <IconButton
              icon={<GIExitClose />}
              onClick={() => {
                onChange(
                  {
                    value: '',
                    operator: 'equals',
                  } as NumberFilterValue,
                  'number',
                );
              }}
              size="sm"
              colorScheme="quiet"
            />
          </HFlex.Item>
        )}

      {(context?.showAdvancedFilter ?? true) && (
        <HFlex.Item flex="0 0 auto">
          <Popover id={`text-adv-filter-${colDef.id}`} placement="bottom-start">
            {({ toggle, ref, isOpened }) => (
              <IconButton
                aria-controls={`text-adv-filter-${colDef.id}`}
                aria-expanded={isOpened}
                aria-haspopup="true"
                icon={<GIFilter />}
                onClick={toggle}
                ref={ref}
                state={isOpened ? 'expanded' : undefined}
                size="sm"
                colorScheme="quiet"
              />
            )}
            {({ setOpened }) => (
              <Popover.Panel maxHeight="34rem" width="28rem">
                <Menu>
                  {numberOptions.map((option) => (
                    <Menu.Item
                      selectionScheme="single"
                      onChange={() => {
                        onChange(
                          {
                            value,
                            secondValue,
                            operator: option.value,
                          } as NumberFilterValue,
                          'number',
                        );
                        setOpened(false);
                      }}
                      key={option.value}
                      state={operator === option.value ? 'selected' : 'enabled'}
                      name="options"
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Menu>
              </Popover.Panel>
            )}
          </Popover>
        </HFlex.Item>
      )}
    </FilterContainer>
  );
};
