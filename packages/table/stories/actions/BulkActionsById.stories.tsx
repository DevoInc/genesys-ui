import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, Flex, Menu, Popover } from '@devoinc/genesys-ui';

import {
  TextRenderer,
  TBulkContext,
  useBulkSelectionById,
  useOrderStruct,
  orderDataByOrderStruct,
  TColDef,
  updateColDefsWithOrderStruct,
  BasicTable,
  TRowDef,
} from '../../src';
import { Holo } from '@devoinc/holo';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/actions/BulkActions/by Id',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const initialData = Holo.of()
  .addType('index', (args = {}) => String(args.index))
  .addType('textIndex', (args = {}) => `${args.index}`)
  .addType('numIndex', (args = {}) => args.index + 10)
  .schema({
    id: 'index',
    bulk: 'bool',
    textIndex: 'textIndex',
    numIndex: 'numIndex',
  })
  .repeat(10)
  .generate();

const BulkExample = () => {
  const [data, setData] = React.useState(initialData);

  const popoverId = 'bulk-actions-menu-nested';

  const { orderStruct, onSort } = useOrderStruct([
    { id: 'text', sort: 'desc' },
  ]);
  const dataOrdered = [...data].sort(orderDataByOrderStruct(orderStruct));

  const { toggleAll, toggle, clear, headerBulkChecked, bulkSelection } = useBulkSelectionById({
    data: dataOrdered,
    initialSelection: [],
  });

  const rowDefs: TRowDef[] = dataOrdered.map((d) => {
    return (
      d.bulk && {
        id: d.id,
        preset: 'selected',
      }
    );
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
        <BasicTable
          id={'tableBulkActionIdStorie'}
          onSort={(colDef: TColDef) => {
            onSort(colDef.id);
          }}
          rowDefs={rowDefs}
          colDefs={updateColDefsWithOrderStruct(
            [
              {
                id: 'bulk',
                preset: 'bulk',
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
                id: 'textIndex',
                cellRenderer: TextRenderer,
                headerName: 'Text',
                sortable: true,
              },
              { id: 'numIndex', cellRenderer: TextRenderer, headerName: 'Num' },
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
