import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Menu, MenuHeading, MenuItem, MenuSeparator } from '.';

const meta: Meta<typeof Menu> = {
  title: 'Components/Core/Navigation/Menu/Cases',
  component: Menu,
  subcomponents: { MenuHeading, MenuItem, MenuSeparator },
  args: {
    cmpRole: 'menu',
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Selectable: Story = {
  render: () =>
    (() => {
      const [selected, setSelected] = React.useState('one');
      const onOptionChange = (e) => {
        const target = e.target;
        if (target.checked) {
          setSelected(target.value);
        }
      };
      return (
        <Menu>
          <Menu.Item
            label="Option one"
            selectionScheme="single"
            onChange={onOptionChange}
            state={selected === 'one' ? 'selected' : 'enabled'}
            name="options"
            value="one"
          />
          <Menu.Item
            label="Option two"
            selectionScheme="single"
            onChange={onOptionChange}
            state={selected === 'two' ? 'selected' : 'enabled'}
            name="options"
            value="two"
          />
          <Menu.Item
            label="Option three"
            selectionScheme="single"
            onChange={onOptionChange}
            state={selected === 'three' ? 'selected' : 'enabled'}
            name="options"
            value="three"
          />
        </Menu>
      );
    })(),
};

export const AsNavigation: Story = {
  render: () => (
    <Menu cmpRole="nav">
      <Menu.Heading>Platform</Menu.Heading>
      <Menu.Item
        href="https://www.devo.com/applications/cloud-siem/"
        label="Security Operations"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/applications/soar/"
        label="SOAR"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/applications/behavior-analytics/"
        label="Behavior Analytics"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/applications/service-operations/"
        label="Service Operations"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/applications/deeptrace/"
        label="DeepTrace"
        target="_blank"
      />
      <Menu.Heading>Use cases</Menu.Heading>
      <Menu.Item
        href="https://www.devo.com/solutions/security/"
        label="Security"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/solutions/it/"
        label="IT Operations"
        target="_blank"
      />
    </Menu>
  ),
};
