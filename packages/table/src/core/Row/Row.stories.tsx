import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Row } from './Row';
import { /* TagRenderer, TagsRenderer, */ TextRenderer } from '../../renderers';
import { useVirtualizer } from '@tanstack/react-virtual';
import { DEFAULT_VIRTUAL_ROW } from '../../constants';

const meta: Meta<typeof Row> = {
  title: 'Components/Table/Row',
  component: Row,
};

export default meta;
type Story = StoryObj<typeof Row>;

const RowWrapper = () => {
  const rowRef = React.useRef();
  const columnVirtualizer = useVirtualizer({
    count: 1,
    getScrollElement: () => rowRef.current,
    estimateSize: () => 120,
    horizontal: true,
  });
  return (
    <Row
      ref={rowRef}
      columnDefs={[
        {
          id: 'name',
          headerName: 'Name',
          cellRenderer: TextRenderer,
          cellStyle: { width: 50 },
        },
        // { id: 'company', headerName: 'Company', cellRenderer: TextRenderer },
        // { id: 'age', headerName: 'age', cellRenderer: TextRenderer },
        // {
        //   id: 'paragraph',
        //   headerName: 'Paragraph',
        //   cellRenderer: TextRenderer,
        // },
        // { id: 'avatar', headerName: 'Avatar', cellRenderer: TextRenderer },
        // { id: 'balance', headerName: 'balance', cellRenderer: TextRenderer },
        // {
        //   id: 'timestamp',
        //   headerName: 'Timesctamp',
        //   cellRenderer: TextRenderer,
        // },
        // {
        //   id: 'booleanValue',
        //   headerName: 'booleanValue',
        //   cellRendererConfig: {
        //     true: { color: 'success', text: 'Active' },
        //     false: { color: 'neutral', text: 'Inactive' },
        //   },
        //   cellRenderer: TagRenderer,
        // },
        // {
        //   id: 'status',
        //   headerName: 'status',
        //   cellRenderer: TagRenderer,
        //   cellRendererConfig: {
        //     TODO: { color: 'warning', text: 'TODO' },
        //     inProgress: { color: 'data-blue', text: 'inProgress' },
        //     test: { color: 'data-bronze', text: 'test' },
        //     done: { color: 'success', text: 'done' },
        //   },
        // },
        // {
        //   id: 'tags',
        //   headerName: 'tags',
        //   preset: 'tags',
        //   cellRenderer: TagsRenderer,
        // },
      ]}
      data={{
        name: 'name',
        // company: 'company',
        // age: 24,
        // paragraph:
        //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut neque sit amet leo feugiat bibendum. Curabitur ut venenatis risus. Mauris ante risus, accumsan in faucibus id, feugiat ut magna. Phasellus a massa nec tortor mattis pulvinar. In hac habitasse platea dictumst. Morbi laoreet velit eget semper rhoncus. Maecenas tincidunt ex ut arcu pellentesque, non pulvinar massa gravida. Vivamus et luctus justo. In venenatis eros eu lacus euismod, sit amet volutpat enim consequat. Aliquam porta, sem eu pellentesque venenatis, ex mauris fringilla dui, nec aliquet risus augue vitae nibh. Sed interdum suscipit cursus. Suspendisse volutpat euismod ante eu tincidunt. Nunc a aliquam dui. Nulla vestibulum velit eros, vitae fermentum enim sollicitudin a.',
        // avatar:
        //   'https://www.gravatar.com/avatar/f40260c4058cc904b7db652c26099966',
        // balance: 12,
        // timestamp: 1702566058527,
        // booleanValue: true,
        // status: 'Done',
        // tags: [
        //   { text: 'Coworker', colorScheme: 'success' },
        //   { text: 'Developer', colorScheme: 'warning' },
        // ],
      }}
      columnVirtualizer={columnVirtualizer}
      virtualRow={DEFAULT_VIRTUAL_ROW}
    />
  );
};

export const Base: Story = {
  render: () => <RowWrapper />,
};
