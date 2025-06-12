import * as React from 'react';

import { DateTimeFloatingPicker } from '@devoinc/genesys-ui-datetime';
import { HFlex, IconButton, Menu, Popover } from '@devoinc/genesys-ui';
import { GIExitClose, GIFilter } from '@devoinc/genesys-icons';

import { DATE_OPTIONS, FilterContainer } from '../common';
import type { TFilter, TFilterContext } from '../../declarations';
import type { TDateFilterValue } from './declarations';

export const DateFilter: React.FC<TFilter> = ({ colDef, onChange }) => {
  const context = colDef?.context as TFilterContext;
  const filterValue = context?.filterValue as TDateFilterValue;
  const value = filterValue?.value ?? null;
  const secondValue = filterValue?.secondValue ?? null;
  const operator = filterValue?.operator ?? 'equals';
  return (
    <FilterContainer>
      <HFlex.Item flex="1 1 auto">
        <DateTimeFloatingPicker
          label=""
          size="sm"
          value={value}
          onApply={(newValue) => {
            onChange(
              {
                value: newValue,
                secondValue,
                operator,
              },
              'date',
            );
          }}
        />
      </HFlex.Item>
      {operator === 'between' && (
        <HFlex.Item flex="1 1 auto">
          <DateTimeFloatingPicker
            label=""
            size="sm"
            aria-label="filter"
            placeholder="To..."
            value={secondValue}
            onApply={(newSecondValue) => {
              onChange(
                {
                  value,
                  secondValue: newSecondValue,
                  operator,
                },
                'date',
              );
            }}
          />
        </HFlex.Item>
      )}

      {(context?.showReset ?? true) &&
        (value !== null || operator !== 'equals') && (
          <HFlex.Item flex="0 0 auto">
            <IconButton
              icon={<GIExitClose />}
              onClick={() => {
                onChange(
                  {
                    value: null,
                    operator: 'equals',
                  } as TDateFilterValue,
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
                  {DATE_OPTIONS.map((option) => (
                    <Menu.Item
                      selectionScheme="single"
                      onClick={() => {
                        onChange(
                          {
                            value,
                            secondValue,
                            operator: option.value,
                          } as TDateFilterValue,
                          'date',
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
