import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  GICheckThick,
  GIMailPostCard,
  GISearchFindZoom,
} from '@devoinc/genesys-icons';
import { Form, HFlex, IconButton, InputControl, VFlex } from '..';

const meta: Meta<typeof InputControl> = {
  title: 'Components/Form/InputControl',
  component: InputControl,
  args: {
    size: 'md',
    status: 'base',
    type: 'text',
  },
  argTypes: {
    addonToLeft: { control: { type: 'text' } },
    addonToRight: { control: { type: 'text' } },
    // because the storybook doesn't recognize the WithRequired utility
    'aria-label': {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputControl>;

export const Playground: Story = {};

export const DisabledAndReadonly: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <InputControl {...props} disabled aria-label="Disabled" />
        <InputControl
          {...props}
          readOnly
          aria-label="Readonly"
          value="Readonly value"
        />
      </Form.Group>
    ))(args),
};

export const Status: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <InputControl {...props} placeholder="Base" aria-label="Base" />
        <InputControl
          {...props}
          placeholder="Error"
          aria-label="Error"
          status="error"
        />
        <InputControl
          {...props}
          placeholder="Success"
          aria-label="Success"
          status="success"
        />
        <InputControl
          {...props}
          placeholder="Warning"
          aria-label="Warning"
          status="warning"
        />
      </Form.Group>
    ))(args),
};

export const WithIcon: Story = {
  tags: ['isHidden'],
  args: {
    'aria-label': 'Address',
    icon: <GIMailPostCard />,
    placeholder: 'Address...',
  },
};

export const WithAddons: Story = {
  tags: ['isHidden'],
  args: {
    'aria-label': 'Web name',
    addonToLeft: 'www.',
    addonToRight: '.com',
    placeholder: 'Web name...',
  },
};

export const Types: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <InputControl {...props} aria-label="Color" type="color" />
        <InputControl {...props} aria-label="Date" type="date" />
        <InputControl
          {...props}
          aria-label="Datetime-local"
          type="datetime-local"
        />
        <InputControl {...props} aria-label="Email" type="email" />
        <InputControl {...props} aria-label="File" type="file" />
        <InputControl {...props} aria-label="Hidden" type="hidden" />
        <InputControl {...props} aria-label="Image" type="image" />
        <InputControl {...props} aria-label="Month" type="month" />
        <InputControl {...props} aria-label="Number" type="number" />
        <InputControl {...props} aria-label="Range" type="range" />
        <InputControl {...props} aria-label="Tel" type="tel" />
        <InputControl {...props} aria-label="Time" type="time" />
        <InputControl {...props} aria-label="Url" type="url" />
        <InputControl {...props} aria-label="Week" type="week" />
      </Form.Group>
    ))(args),
};

export const AdvancedUsage: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => (
      <InputControl._Container>
        <InputControl._Addon position="left" style="background-color: orange">
          Addon to left
        </InputControl._Addon>
        <InputControl._InnerContainer>
          <InputControl._Icon icon={<GICheckThick />} style="color: purple;" />
          <InputControl._Input
            aria-label="story example"
            hasAddonToLeft
            hasAddonToRight
            hasIcon
          />
        </InputControl._InnerContainer>
        <InputControl._Addon
          position="right"
          style="background-color: darkblue; color: white;"
        >
          Addon to right
        </InputControl._Addon>
      </InputControl._Container>
    ))(),
};

export const SearchType: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => (
      <VFlex>
        <InputControl
          aria-label="With type icon"
          placeholder="With type icon"
          type="search"
        />
        <HFlex spacing="cmp-xxs">
          <InputControl
            aria-label="Without type icon"
            hideTypeIcon
            placeholder="Without type icon"
            type="search"
          />
          <IconButton icon={<GISearchFindZoom />} />
        </HFlex>
      </VFlex>
    ))(),
};

export const PasswordType: Story = {
  tags: ['isHidden'],
  args: {
    type: 'password',
    defaultValue: '123456',
  },
};
