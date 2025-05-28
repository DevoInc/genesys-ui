import { Meta, StoryObj } from '@storybook/react-vite';

import { Row } from './Row';

const meta: Meta<typeof Row> = {
  title: 'Components/Layout/Table/Core/Row',
  component: Row,
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Base: Story = {
  args: {
    rowIndex: 1,
    width: 200,
    height: 20,
    start: 10,
    children: 'Row',
    rowDef: { id: 'id' },
    stripe: 'even',
    striped: true,
  },
};
