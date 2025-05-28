import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { storiesData } from './__stories__/data';
import { ContentSwitcher } from './ContentSwitcher';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { VFlex } from '../VFlex';
import { GIGridView, GITextBulletsList } from '@devoinc/genesys-icons';

const meta: Meta<typeof ContentSwitcher> = {
  title: 'Components/Navigation/ContentSwitcher',
  component: ContentSwitcher,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof ContentSwitcher>;

export const Playground: Story = {
  render: (args) =>
    ((props) => {
      const [selection, setSelection] = React.useState('first');
      return (
        <ContentSwitcher {...props}>
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

export const OnlyIcons: Story = {
  render: (args) =>
    ((props) => {
      const [selection, setSelection] = React.useState('list-view');
      return (
        <ContentSwitcher {...props}>
          <ContentSwitcher.Item
            aria-controls="list-view-block"
            id="list-view"
            onChange={() => {
              setSelection('list-view');
            }}
            state={selection === 'list-view' ? 'selected' : 'enabled'}
            icon={<GITextBulletsList />}
            tooltip="List view"
          />
          <ContentSwitcher.Item
            aria-controls="grid-view-block"
            id="grid-view"
            onChange={() => {
              setSelection('grid-view');
            }}
            state={selection === 'grid-view' ? 'selected' : 'enabled'}
            icon={<GIGridView />}
            tooltip="Grid view"
          />
        </ContentSwitcher>
      );
    })(args),
};

export const AccessibleWithContent: Story = {
  tags: ['isHidden'],
  name: 'With content blocks',
  render: () =>
    (() => {
      const [selection, setSelection] = React.useState('first');
      return (
        <VFlex width="54rem">
          <ContentSwitcher>
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
          {storiesData.map((option) => (
            <Box
              aria-labelledby={option.id}
              display={option.id === selection ? 'block' : 'none'}
              id={`content-${option.id}`}
              key={option.id}
              role="tabpanel"
              tabIndex={0}
            >
              <Typography.Paragraph>{option.content}</Typography.Paragraph>
            </Box>
          ))}
        </VFlex>
      );
    })(),
};
