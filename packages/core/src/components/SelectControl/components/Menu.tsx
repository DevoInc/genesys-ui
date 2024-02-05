import * as React from 'react';
import { components, MenuProps as RSMenuProps, MultiValue } from 'react-select';

import { SelectOption } from '../declarations';

import { showMenuAndDropDown } from '../utils';
import { SelectControlContext } from '../context';

import { Button } from '../../Button';
import { Checkbox } from '@devoinc/genesys-ui-form';
import { StyledSelectMenu, StyledSelectAll } from '../styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuProps<Option> extends RSMenuProps<Option> {}

export const Menu = <Option extends SelectOption>(
  props: MenuProps<Option>,
): React.ReactElement<MenuProps<Option>> => {
  const { options } = props;
  const { values } = React.useContext(SelectControlContext);
  const isAllSelected = values.length > 0 && values.length === options.length;
  const handleSelectAll = React.useCallback(() => {
    return props.setValue(
      values.length > 0 ? [] : (options as Option | MultiValue<Option>),
      values.length > 0 ? 'deselect-option' : 'select-option',
    );
  }, [options, values]);
  return (
    showMenuAndDropDown<Option>(props.selectProps) &&
    components.Menu && (
      <StyledSelectMenu
        classNamePrefix={'react-select'}
        alignOptions={props.selectProps.alignOptions}
        className={`${props.selectProps.className}__menu`}
        size={props.selectProps.size}
        menuIsOpen={props.selectProps.menuIsOpen}
        menuLevel={props.selectProps.menuLevel}
        menuQuiet={props.selectProps.menuQuiet}
        menuRelative={props.selectProps.menuRelative}
        maxMenuHeight={props.selectProps.maxMenuHeight}
        minMenuHeight={props.selectProps.minMenuHeight}
        minMenuWidth={props.selectProps.minMenuWidth}
        multipleSubtle={props.selectProps.multipleSubtle}
      >
        <components.Menu {...props}>
          {props.selectProps.isMulti && props.selectProps.selectAllBtn && (
            <StyledSelectAll
              multipleSubtle={props.selectProps.multipleSubtle}
              size={props.selectProps.size}
            >
              {props.selectProps.multipleSubtle ? (
                <Checkbox
                  label="(Select all)"
                  onChange={() => {
                    handleSelectAll();
                  }}
                  checked={isAllSelected}
                  indeterminate={values.length > 0 && !isAllSelected}
                  id={
                    props.selectProps.id
                      ? `${props.selectProps.id}__select-all`
                      : null
                  }
                />
              ) : (
                <Button
                  onClick={handleSelectAll}
                  size={'sm'}
                  colorScheme={'quiet'}
                >
                  Select all
                </Button>
              )}
            </StyledSelectAll>
          )}
          {props.children}
        </components.Menu>
      </StyledSelectMenu>
    )
  );
};
