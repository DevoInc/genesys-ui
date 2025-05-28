import { Meta, StoryObj } from '@storybook/react-vite';

import { DevoLogoSpinner } from './DevoLogoSpinner';

const meta: Meta<typeof DevoLogoSpinner> = {
  title: 'Components/Feedback/DevoLogoSpinner',
  component: DevoLogoSpinner,
  args: { animation: 'flow', colorScheme: 'dark', size: 'md' },
};

export default meta;
type Story = StoryObj<typeof DevoLogoSpinner>;

export const Playground: Story = {};
