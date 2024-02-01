import * as React from 'react';

import {
  InputControl,
  HFlex,
  Popover,
  IconButton,
  Menu,
} from '@devoinc/genesys-ui';

import {
  BasicFilter,
  FilterContainer,
  textOptions,
  TEXT_ADDON_MAP,
} from '../common';
import type { FilterContext, FilterProps } from '../declarations';
import type { TextFilterValue } from './declarations';

export const TextFilter: React.FC<FilterProps> = ({ onChange, colDef }) => {
  const context = colDef?.context as FilterContext;
  const filterValue = context?.filterValue as TextFilterValue;
  const value = filterValue?.value ?? '';
  const operator = filterValue?.operator ?? 'contains';
  return (
    <FilterContainer>
      <BasicFilter>
        <InputControl
          size="sm"
          aria-label="filter"
          placeholder="Filter content..."
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(
              {
                value: event.currentTarget.value,
                operator,
              } as TextFilterValue,
              'text',
            );
          }}
          disabled={['blank', 'notBlank'].includes(operator)}
          addonToLeft={TEXT_ADDON_MAP[operator] as string}
        />
      </BasicFilter>

      {(context?.showReset ?? true) &&
        (value !== '' || operator !== 'contains') && (
        <HFlex.Item flex="0 0 auto">
          <IconButton
            icon="gi-exit_close"
            onClick={() => {
              onChange(
                  {
                    value: '',
                    operator: 'contains',
                  } as TextFilterValue,
                  'text',
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
                icon="gi-filter"
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
                  {textOptions.map((option) => (
                    <Menu.Item
                      selectionScheme="single"
                      onChange={() => {
                        onChange(
                          {
                            value,
                            operator: option.value,
                          } as TextFilterValue,
                          'text',
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
