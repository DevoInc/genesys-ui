import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Cell } from '../../Cell';
import { ColumnsCellProps, StylesCellProps } from '../../declarationsfake';

const column: ColumnsCellProps = {
  id: 'name',
  dataKey: 'name',
  Header: 'Name',
  type: 'longText',
  minWidth: 100,
  editConf: {
    isLongText: true,
  },
};

const styles: StylesCellProps = {
  density: 'comfortable',
  tallRows: false,
  rowHeight: 10,
};

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/popper renderer',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  render: () =>
    (() => {
      return (
        <Cell
          column={column}
          styles={styles}
          renderer={'popper'}
          hasPopper={true}
          width={20}
        >
          Hola
        </Cell>
      );
    })(),
};
