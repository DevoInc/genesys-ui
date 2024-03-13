import * as React from 'react';
import { components, MenuProps as RSMenuProps, MultiValue } from 'react-select';

import { TSelectOption } from '../declarations';

import { showMenuAndDropDown } from '../utils';
import { SelectControlContext } from '../context';

import { Button } from '../../Button';
import { CheckboxControl } from '../../CheckboxControl';
import { Field } from '../../Field';

import { StyledSelectMenu, StyledSelectAll } from '../styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuProps<Option> extends RSMenuProps<Option> {}

export const Menu = <Option extends TSelectOption>(
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
  const selectAllLabel = '(Select all)';
  const selectAllId = props.selectProps.id
    ? `${props.selectProps.id}__select-all`
    : null;
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
                <Field
                  id={selectAllId}
                  label={selectAllLabel}
                  labelPosition="right"
                >
                  <CheckboxControl
                    aria-label={selectAllLabel}
                    id={selectAllId}
                    onChange={() => {
                      handleSelectAll();
                    }}
                    checked={isAllSelected}
                    indeterminate={values.length > 0 && !isAllSelected}
                  />
                </Field>
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
