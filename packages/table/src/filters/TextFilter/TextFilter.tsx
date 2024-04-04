import * as React from 'react';

import {
  InputControl,
  HFlex,
  Popover,
  IconButton,
  Menu,
} from '@devoinc/genesys-ui';
import { GIExitClose, GIFilter } from '@devoinc/genesys-icons';

import {
  BasicFilter,
  FilterContainer,
  TEXT_OPTIONS,
  TEXT_ADDON_MAP,
} from '../common';
import type { TFilterContext, TFilter } from '../../declarations';
import type { TTextFilterValue } from './declarations';

export const TextFilter: React.FC<TFilter> = ({ onChange, colDef }) => {
  const context = colDef?.context as TFilterContext;
  const filterValue = context?.filterValue as TTextFilterValue;
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
              } as TTextFilterValue,
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
              icon={<GIExitClose />}
              onClick={() => {
                onChange(
                  {
                    value: '',
                    operator: 'contains',
                  } as TTextFilterValue,
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
                  {TEXT_OPTIONS.map((option) => (
                    <Menu.Item
                      selectionScheme="single"
                      onChange={() => {
                        onChange(
                          {
                            value,
                            operator: option.value,
                          } as TTextFilterValue,
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
