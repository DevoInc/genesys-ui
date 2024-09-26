import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, Flex, Menu, Popover } from '@devoinc/genesys-ui';

import {
  BooleanRenderer,
  Table,
  TextRenderer,
  HeaderBulkRenderer,
  TBulkContext,
  useBulkSelectionById,
  BulkRendererById,
  useOrderStruct,
  orderDataByOrderStruct,
  TColDef,
  updateColDefsWithOrderStruct,
} from '../../src';

const meta: Meta<typeof Table> = {
  title: 'Components/Layout/Table/actions/BulkActions/by Id',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const initialData = Array.from({ length: 10 }).map((_, index) => ({
  bulk: false,
  text: `text ${index}`,
  num: index + 10,
  bool: false,
  text2: `other text ${index}`,
  disabled: index === 3,
}));

const BulkExample = () => {
  const [data, setData] = React.useState(initialData);

  const popoverId = 'bulk-actions-menu-nested';

  const { orderStruct, onSort } = useOrderStruct([
    { id: 'text', sort: 'desc' },
  ]);
  const dataOrdered = [...data].sort(orderDataByOrderStruct(orderStruct));

  const { toggleAll, toggle, clear, headerBulkChecked } = useBulkSelectionById({
    data: dataOrdered,
    initialSelection: [],
  });
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
        <Button
          onClick={() => {
            setData([]);
          }}
        >
          Empty data
        </Button>
      </Flex.Item>
      <Flex.Item>
        <Table
          onSort={(colDef: TColDef) => {
            onSort(colDef.id);
          }}
          colDefs={updateColDefsWithOrderStruct(
            [
              {
                id: 'bulk',
                cellRenderer: BulkRendererById,
                headerRenderer: HeaderBulkRenderer,
                width: 64,
                context: {
                  headerDisabled: data.length === 0,
                  headerBulkMenu: ({ setOpened }) => {
                    return (
                      <Menu>
                        <Menu.Heading>Bulk actions: Selected</Menu.Heading>
                        <Menu.Separator />
                        <Menu.Item
                          onClick={() => {
                            setOpened(false);
                          }}
                        >
                          Dummy action
                        </Menu.Item>
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
                    );
                  },
                  headerBulkChecked,
                  onBulkCheckboxChange: (rowIndex) => {
                    toggle(rowIndex);
                  },
                  onHeaderBulkCheckboxChange: () => {
                    toggleAll();
                  },
                } as TBulkContext,
              },
              {
                id: 'text',
                cellRenderer: TextRenderer,
                headerName: 'Text',
                sortable: true,
              },
              { id: 'num', cellRenderer: TextRenderer, headerName: 'Num' },
              { id: 'bool', cellRenderer: BooleanRenderer, headerName: 'Bool' },
              { id: 'text2', cellRenderer: TextRenderer, headerName: 'Text 2' },
            ],
            orderStruct,
          )}
          data={dataOrdered}
        />
      </Flex.Item>
    </Flex>
  );
};

export const Base: Story = {
  render: () => <BulkExample />,
};
