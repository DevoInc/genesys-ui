import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { ColDef } from '../declarations';
import { EditTags } from '.';
import { Cell } from '../core/Cell';
import { TagsRenderer } from '../renderers';
import { TagProps } from '@devoinc/genesys-ui';

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/Edit/Tags',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const TagsEditor: Story = {
  render: () =>
    (() => {
      const data = Holo.of()
        .schema({
          tags: () =>
            Holo.chance.pickset(
              [
                { text: 'Coworker', colorScheme: 'success' },
                { text: 'Developer', colorScheme: 'data-magenta' },
                { text: 'Engineer', colorScheme: 'data-purple' },
                { text: 'Components', colorScheme: 'data-blue' },
              ],
              Holo.chance.integer({ min: 1, max: 4 }),
            ),
        })
        .repeat(1)
        .generate();
      const [tags, setTags] = React.useState<TagProps[]>(
        data[0]['tags'] as TagProps[],
      );

      const onChange = (newTags: TagProps[]) => setTags(newTags);

      const columnEditTags: ColDef = {
        id: 'tags',
        headerName: 'tags',
        preset: 'tags',
        cellEditor: () => EditTags({ value: tags, onChange }),
        cellRenderer: TagsRenderer,
        editable: true,
      };
      return (
        <Cell height={40} width={60} columnDef={columnEditTags} data={tags} />
      );
    })(),
};
