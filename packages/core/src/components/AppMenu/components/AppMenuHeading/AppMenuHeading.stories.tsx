import { Meta, StoryObj } from '@storybook/react-vite';
import { AppMenu } from '../../AppMenu';

const meta: Meta<typeof AppMenu.Heading> = {
  title: 'Components/Navigation/AppMenu/Components/AppMenuHeading',
  component: AppMenu.Heading,
  args: {
    text: 'Administration',
    collapsed: false,
  },
};

export default meta;
type Story = StoryObj<typeof AppMenu.Heading>;

export const Playground: Story = {};
