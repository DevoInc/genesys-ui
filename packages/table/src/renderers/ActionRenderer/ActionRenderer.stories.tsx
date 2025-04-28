import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { GIEyeViewFilled, GIIdea, GIPencilEdit } from '@devoinc/genesys-icons';

import { ActionRenderer } from './ActionRenderer';
import type { TActionContext } from '../../facade';

const meta: Meta<typeof ActionRenderer> = {
  title: 'Components/Layout/Table/Renderers/ActionRenderer',
  component: ActionRenderer,
};

export default meta;
type Story = StoryObj<typeof ActionRenderer>;

export const Base: Story = {
  args: {
    colDef: {
      id: 'actions',
      context: {
        quickActions: [
          {
            Icon: <GIEyeViewFilled />,
            onClick: () => {
              // eslint-disable-next-line no-console
              console.debug('Quick action 1');
            },
            hasBadge: true,
            badgeText: 8,
            tooltip: 'Open this entity',
          },
          {
            Icon: <GIPencilEdit />,
            onClick: () => {
              // eslint-disable-next-line no-console
              console.debug('Quick action 2');
            },
            tooltip: 'Edit this entity',
          },
        ],
        actionMenu: [
          {
            text: 'Action 1',
            onClick: () => {
              // eslint-disable-next-line no-console
              console.debug('Menu action 1');
            },
          },
          {
            text: 'Action 2',
            Icon: <GIIdea />,
            onClick: () => {
              // eslint-disable-next-line no-console
              console.debug('Menu action 2');
            },
          },
          {
            text: 'Action 3',
            children: [
              {
                text: 'Action 3.1',
                onClick: () => {
                  // eslint-disable-next-line no-console
                  console.debug('Menu action 3.1');
                },
              },
              {
                text: 'Action 3.2',
                onClick: () => {
                  // eslint-disable-next-line no-console
                  console.debug('Menu action 3.2');
                },
              },
            ],
          },
          { component: 'separator' },
          // eslint-disable-next-line no-console
          { text: 'Action 4', onClick: () => console.debug('Menu action 4') },
        ],
      } as TActionContext,
    },
  },
};
