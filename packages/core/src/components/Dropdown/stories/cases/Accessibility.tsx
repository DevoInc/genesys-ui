import * as React from 'react';

import { Dropdown, DropdownProps } from '../../Dropdown';
import { Button } from '../../../Button';
import { Menu } from '../../../Menu';

export const Accessibility = ({ ...props }: Partial<DropdownProps>) => (
  <Dropdown {...props}>
    {({ toggle, ref, isOpened }) => (
      <Button
        aria-controls="btn-dd"
        aria-expanded={isOpened}
        aria-haspopup={true}
        onClick={toggle}
        ref={ref}
      >
        TriggerElement
      </Button>
    )}
    <Menu>
      <Menu.Item label="Option 1" />
      <Menu.Item label="Option 2" />
      <Menu.Item label="Option 3" />
      <Dropdown placement="right-start">
        {({ toggle, ref, isOpened, setOpened }) => (
          <Menu.Item
            expandable
            label="Option 4"
            onClick={() => setOpened(true)}
            onMouseLeave={toggle}
            onMouseOver={() => setOpened(true)}
            ref={ref}
            state={isOpened ? 'expanded' : 'enabled'}
          />
        )}
        <Menu>
          <Menu.Item label="Option 4.1" />
          <Menu.Item label="Option 4.2" />
          <Menu.Item label="Option 4.3" />
        </Menu>
      </Dropdown>
    </Menu>
  </Dropdown>
);
