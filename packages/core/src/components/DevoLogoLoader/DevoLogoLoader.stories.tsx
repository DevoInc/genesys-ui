import { Meta, StoryObj } from '@storybook/react';

import { DevoLogoLoader } from './DevoLogoLoader';

const meta: Meta<typeof DevoLogoLoader> = {
  title: 'Components/Core/Feedback/DevoLogoLoader',
  component: DevoLogoLoader,
  args: { animation: 'flow', colorScheme: 'dark', size: 'md' },
};

export default meta;
type Story = StoryObj<typeof DevoLogoLoader>;

export const Basic: Story = {};
