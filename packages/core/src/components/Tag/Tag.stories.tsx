import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { GITagPriceSale } from '@devoinc/genesys-icons';

import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Feedback/Tag',
  component: Tag,
  args: {
    size: 'md',
    colorScheme: 'neutral',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Base: Story = {
  args: {
    icon: <GITagPriceSale />,
    text: 'Category',
  },
};
