import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { HeaderCell } from './HeaderCell';
import { DEFAULT_COLDEF } from '../../constants';

const meta: Meta<typeof HeaderCell> = {
  title: 'Components/Table/Header Cell',
  component: HeaderCell,
};

export default meta;
type Story = StoryObj<typeof HeaderCell>;

export const Base: Story = {
  render: () =>
    (() => {
      return (
        <HeaderCell
          colDef={DEFAULT_COLDEF}
          headerCellWidth={300}
          offsetX={30}
        />
      );
    })(),
};
