import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { ColorPicker } from './';

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/Form/ColorPicker',
  component: ColorPicker,
  args: {
    colorIndicatorType: 'circle',
    defaultValue: '#000',
    id: 'story-case',
    label: 'Label for story',
    labelPosition: 'top',
    liveUpdate: false,
    size: 'md',
    status: 'base',
  },
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
    // because the storybook doesn't recognize the WithRequired utility
    id: {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Playground: Story = {
  render: (props) => {
    const [state, setState] = React.useState({ color: '#234567' });
    return (
      <ColorPicker
        {...props}
        value={state.color}
        presetColors={['rgba(143,36,36,1)', 'rgba(143,36,36,0.5)']}
        onChange={(color) => {
          setState({ color });
          window.console.debug('Change color to:', color);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  render: (args) =>
    ((props) => {
      const [state, setState] = React.useState({ color: '#234567' });
      return (
        <ColorPicker
          {...props}
          disabled
          value={state.color}
          presetColors={['rgba(143,36,36,1)', 'rgba(143,36,36,0.5)']}
          onChange={(color) => {
            setState({ color });
            window.console.debug('Change color to:', color);
          }}
        />
      );
    })(args),
};

export const ReadOnly: Story = {
  render: (args) =>
    ((props) => {
      const [state, setState] = React.useState({ color: '#234567' });
      return (
        <ColorPicker
          {...props}
          readOnly
          value={state.color}
          presetColors={['rgba(143,36,36,1)', 'rgba(143,36,36,0.5)']}
          onChange={(color) => {
            setState({ color });
            window.console.debug('Change color to:', color);
          }}
        />
      );
    })(args),
};
