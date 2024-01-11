import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, Flex, Menu, Popover } from '@devoinc/genesys-ui';

import {
  BooleanRenderer,
  BulkRenderer,
  Table,
  TextRenderer,
  HeaderBulkRenderer,
  BulkContext,
  useBulkSelection,
} from '../src';

const meta: Meta<typeof Table> = {
  title: 'Components/Table/BulkActions',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const initialData = new Array(10).fill(null).map((_, index) => ({
  text: `text ${index}`,
  num: index + 10,
  bool: false,
  text2: `other text ${index}`,
  disabled: index === 3,
}));

const BulkExample = () => {
  const [data, setData] = React.useState(initialData);
  const bulkDisabled = React.useMemo(
    () =>
      data.reduce((prev, row, index) => {
        if (row.disabled) {
          return [...prev, index];
        }
        return prev;
      }, []),
    [data],
  );

  const { bulkSelection, toggleAll, toggle, clear, headerBulkChecked } =
    useBulkSelection({
      dataLength: data.length,
      initialSelection: [],
      bulkDisabled,
    });

  const popoverId = 'bul-actions-menu-nested';
  return (
    <Flex flexDirection="column" gap="cmp-md">
      <Flex.Item>
        <Button
          onClick={() => {
            setData((prev) => [
              ...prev,
              {
                text: 'text new',
                num: 20,
                bool: true,
                text2: 'other text',
                disabled: false,
              },
            ]);
          }}
        >
          Add row
        </Button>
      </Flex.Item>
      <Flex.Item>
        <Table
          data={data}
          colDefs={[
            {
              id: 'bulk',
              cellRenderer: BulkRenderer,
              headerRenderer: HeaderBulkRenderer,
              width: 64,
              context: {
                headerBulkMenu:
                  bulkSelection.length > 0 ? (
                    <Menu>
                      <Menu.Heading>
                        Bulk actions: {bulkSelection.length} Selected
                      </Menu.Heading>
                      <Menu.Separator />
                      <Menu.Item>Dummy action 1</Menu.Item>
                      <Menu.Item>Dummy action 2</Menu.Item>
                      <Popover placement="right-start" id={popoverId}>
                        {({ toggle, ref, isOpened, setOpened }) => (
                          <Menu.Item
                            aria-controls={popoverId}
                            aria-haspopup="true"
                            aria-expanded={isOpened}
                            ref={ref}
                            onClick={() => {
                              setOpened(true);
                            }}
                            onMouseLeave={toggle}
                            onMouseOver={() => {
                              setOpened(true);
                            }}
                            expandable
                            state={isOpened ? 'expanded' : undefined}
                          >
                            Danger actions
                          </Menu.Item>
                        )}
                        <Popover.Panel>
                          <Menu>
                            <Menu.Item>Dummy action 1</Menu.Item>
                            <Menu.Item>Dummy action 2</Menu.Item>
                            <Menu.Item
                              onClick={() => {
                                setData((prev) =>
                                  prev.filter(
                                    (_, index) =>
                                      !bulkSelection.includes(index),
                                  ),
                                );
                                clear();
                              }}
                            >
                              Remove row(s)
                            </Menu.Item>
                          </Menu>
                        </Popover.Panel>
                      </Popover>
                    </Menu>
                  ) : undefined,
                bulkSelection,
                bulkDisabled,
                headerBulkChecked,
                onBulkCheckboxChange: (rowIndex) => {
                  toggle(rowIndex);
                },
                onHeaderBulkCheckboxChange: () => {
                  toggleAll();
                },
              } as BulkContext,
            },
            { id: 'text', cellRenderer: TextRenderer, headerName: 'Text' },
            { id: 'num', cellRenderer: TextRenderer, headerName: 'Num' },
            { id: 'bool', cellRenderer: BooleanRenderer, headerName: 'Bool' },
            { id: 'text2', cellRenderer: TextRenderer, headerName: 'Text 2' },
          ]}
        />
      </Flex.Item>
    </Flex>
  );
};

export const Base: Story = {
  render: () => <BulkExample />,
};
