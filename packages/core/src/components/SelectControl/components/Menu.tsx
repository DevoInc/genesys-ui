import * as React from 'react';
import { components, MenuProps as ReactSelectMenuProps } from 'react-select';

import { Button } from '../..';
import { showMenuAndDropDown } from '../utils';
import { StyledSelectMenu, StyledSelectAll } from '../styled';
import { CommonSelectCmpsProps } from '../declarations';

export interface MenuProps extends ReactSelectMenuProps {
  selectProps: ReactSelectMenuProps['selectProps'] & CommonSelectCmpsProps;
  setValue: (value: any) => void;
}

export const Menu: React.FC<MenuProps> = (props) => {
  return (
    showMenuAndDropDown(props) &&
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
                onClick={() => props.setValue(props.selectProps.options)}
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
