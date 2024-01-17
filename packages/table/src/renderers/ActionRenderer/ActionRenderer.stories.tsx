import { Meta, StoryObj } from '@storybook/react';

import { GIEyeViewFilled, GIPencilEdit } from '@devoinc/genesys-icons';

import { ActionRenderer } from './ActionRenderer';
import { ActionContext } from '../../facade';

const meta: Meta<typeof ActionRenderer> = {
  title: 'Components/Table/Renderers/ActionRenderer',
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
            Icon: GIEyeViewFilled,
            // eslint-disable-next-line no-console
            onClick: () => console.debug('Quick action 1'),
          },
          {
            Icon: GIPencilEdit,
            // eslint-disable-next-line no-console
            onClick: () => console.debug('Quick action 2'),
          },
        ],
        actionMenu: [
          // eslint-disable-next-line no-console
          { text: 'Action 1', onClick: () => console.debug('Menu action 1') },
          // eslint-disable-next-line no-console
          { text: 'Action 2', onClick: () => console.debug('Menu action 2') },
          {
            text: 'Action 3',
            children: [
              {
                text: 'Action 3.1',
                // eslint-disable-next-line no-console
                onClick: () => console.debug('Menu action 3.1'),
              },
              {
                text: 'Action 3.2',
                // eslint-disable-next-line no-console
                onClick: () => console.debug('Menu action 3.2'),
              },
            ],
          },
          { component: 'separator' },
          // eslint-disable-next-line no-console
          { text: 'Action 4', onClick: () => console.debug('Menu action 4') },
        ],
      } as ActionContext,
    },
  },
};
