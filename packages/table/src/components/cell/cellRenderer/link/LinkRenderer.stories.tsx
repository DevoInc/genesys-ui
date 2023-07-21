import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Cell } from '../../Cell';
import { ColumnsCellProps, StylesCellProps } from '../../declarationsfake';

const column: ColumnsCellProps = {
  id: 'name',
  dataKey: 'name',
  Header: 'Name',
  type: 'longText',
};

const styles: StylesCellProps = {
  density: 'comfortable',
  tallRows: false,
  rowHeight: 10,
};

const meta: Meta<typeof Cell> = {
  title: 'Table/Components/Cell/link renderer',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  render: () =>
    (() => {
      return (
        <Cell column={column} styles={styles} renderer={'link'}>
          https://devoinc.atlassian.net/jira/software/c/projects/QUV/boards/493?selectedIssue=QUV-1227
        </Cell>
      );
    })(),
};
