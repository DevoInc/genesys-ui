import * as React from 'react';
import { components, MenuProps as RSMenuProps, MultiValue } from 'react-select';

import type { TSelectOption } from '../../declarations';
import { showMenuAndDropDown } from '../../utils';
import { SelectControlContext } from '../../context';
import { Button } from '../../../Button';
import { StyledSelectMenu } from './StyledSelectMenu';
import { StyledSelectAll } from './StyledSelectAll';
import { Checkbox } from '../../../Checkbox';
import { Box } from '../../../Box';

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

  const hasFiltered = options.find(
    (opt) =>
      (opt.label &&
        String(opt.label)
          .toLowerCase()
          .includes(String(props.selectProps.inputValue).toLowerCase())) ||
      // for userInfo render
      // @ts-ignore
      (opt.description &&
        // @ts-ignore
        String(opt.description.toLowerCase()).includes(
          String(props.selectProps.inputValue)?.toLowerCase(),
        )),
  );

  return (
    showMenuAndDropDown<Option>(props.selectProps) &&
    components.Menu && (
      <StyledSelectMenu
        $classNamePrefix={'react-select'}
        $alignOptions={props.selectProps.alignOptions}
        className={`${props.selectProps.className}__menu`}
        $size={props.selectProps.size}
        $menuIsOpen={props.selectProps.menuIsOpen}
        $menuLevel={props.selectProps.menuLevel}
        $menuQuiet={props.selectProps.menuQuiet}
        $menuRelative={props.selectProps.menuRelative}
        $maxMenuHeight={props.selectProps.maxMenuHeight}
        $minMenuHeight={props.selectProps.minMenuHeight}
        $maxMenuWidth={props.selectProps.maxMenuWidth}
        $minMenuWidth={props.selectProps.minMenuWidth}
        $multipleSubtle={props.selectProps.multipleSubtle}
      >
        <components.Menu {...props}>
          {props.selectProps.isMulti &&
            props.selectProps.selectAllBtn &&
            hasFiltered && (
              <StyledSelectAll
                $multipleSubtle={props.selectProps.multipleSubtle}
                $size={props.selectProps.size}
              >
                {props.selectProps.multipleSubtle ? (
                  <Box
                    onClick={() => {
                      handleSelectAll();
                    }}
                  >
                    <Checkbox
                      id={null}
                      label={selectAllLabel}
                      onChange={() => {
                        handleSelectAll();
                      }}
                      checked={isAllSelected}
                      indeterminate={values.length > 0 && !isAllSelected}
                    />
                  </Box>
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
