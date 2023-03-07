import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { storiesData } from './__stories__/data';
import { ContentSwitcher } from './ContentSwitcher';

const meta: Meta<typeof ContentSwitcher> = {
  title: 'Components/Core/Navigation/ContentSwitcher',
  component: ContentSwitcher,
};

export default meta;
type Story = StoryObj<typeof ContentSwitcher>;

export const Base: Story = {
  args: {
    size: 'md',
  },
  render: (args) =>
    ((args) => {
      const [selection, setSelection] = React.useState('first');

      return (
        <ContentSwitcher {...args}>
          {storiesData.map((option) => (
            <ContentSwitcher.Item
              aria-controls={`content-${option.id}`}
              icon={option.icon}
              id={option.id}
              key={option.id}
              onChange={() => {
                setSelection(option.id);
              }}
              state={option.id === selection ? 'selected' : 'enabled'}
            >
              {option.label}
            </ContentSwitcher.Item>
          ))}
        </ContentSwitcher>
      );
    })(args),
};
