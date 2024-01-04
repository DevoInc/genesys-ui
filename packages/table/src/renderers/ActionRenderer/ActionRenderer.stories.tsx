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
            onClick: () => console.log('Quick action 1'),
          },
          { Icon: GIPencilEdit, onClick: () => console.log('Quick action 2') },
        ],
        actionMenu: [
          { text: 'Action 1', onClick: () => console.log('Menu action 1') },
          { text: 'Action 2', onClick: () => console.log('Menu action 2') },
          {
            text: 'Action 3',
            children: [
              {
                text: 'Action 3.1',
                onClick: () => console.log('Menu action 3.1'),
              },
              {
                text: 'Action 3.2',
                onClick: () => console.log('Menu action 3.2'),
              },
            ],
          },
          { component: 'separator' },
          { text: 'Action 4', onClick: () => console.log('Menu action 4') },
        ],
      } as ActionContext,
    },
  },
};
