import * as React from 'react';

import { Dropdown, DropdownProps } from '../../Dropdown';
import { Button } from '../../../Button';
import { Menu } from '../../../Menu';

export const Accessibility = ({ ...props }: Partial<DropdownProps>) => (
  <Dropdown {...props}>
    {({ toggle, ref, isOpened }) => (
      <Button
        onClick={toggle}
        aria-haspopup={true}
        aria-expanded={isOpened}
        aria-controls="btn-dd"
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
            onClick={() => setOpened(true)}
            onMouseOver={() => setOpened(true)}
            onMouseLeave={toggle}
            ref={ref}
            state={isOpened ? 'expanded' : 'enabled'}
            label="Option 4"
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
