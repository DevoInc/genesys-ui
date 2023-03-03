import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tooltip, Icon } from '..';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Core/Feedback/Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Base: Story = {
  render: (args) => (
    <div>
      <div style={{ padding: '2rem' }}>
        <Icon iconId="star_favorite_rating_active" data-tip="Set as default" />
      </div>

      <Tooltip effect="solid" delayShow={150} offset={{ top: 2 }} {...args} />
    </div>
  ),
};
