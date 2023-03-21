import * as React from 'react';
import { components, MenuProps as RSMenuProps } from 'react-select';

import { Button } from '../..';
import { showMenuAndDropDown } from '../utils';
import { StyledSelectMenu, StyledSelectAll } from '../styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuProps extends RSMenuProps {}

export const Menu: React.FC<MenuProps> = (props) => {
  const handleSelectAll = React.useCallback(
    () => props.setValue(props.options, 'select-option'),
    [props]
  );

  return (
    showMenuAndDropDown(props.selectProps) &&
    components.Menu && (
      <StyledSelectMenu
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
      >
        <components.Menu {...props}>
          {props.selectProps.isMulti && props.selectProps.selectAllBtn && (
            <StyledSelectAll size={props.selectProps.size}>
              <Button
                onClick={handleSelectAll}
                size={'sm'}
                colorScheme={'quiet'}
              >
                Select all
              </Button>
            </StyledSelectAll>
          )}
          {props.children}
        </components.Menu>
      </StyledSelectMenu>
    )
  );
};
