import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import {
  Button,
  ButtonGroup,
  Menu,
  Panel,
  Popover,
  Typography,
  VFlex,
} from '@devoinc/genesys-ui';

import {
  BooleanRenderer,
  TextRenderer,
  TBulkContext,
  useBulkSelection,
  BasicTable,
} from '../../src';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/actions/Bulkactions/by Index',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const initialData = Array.from({ length: 10 }).map((_, index) => ({
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

  const popoverId = 'bulk-actions-menu-nested';
  return (
    <VFlex>
      <ButtonGroup alignSelf="flex-start">
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
      </ButtonGroup>
      <BasicTable
        id={'tableBUlkActionStorie'}
        data={data}
        showFilters={true}
        colDefs={[
          {
            id: 'bulk',
            preset: 'bulk',
            context: {
              headerDisabled: data.length === 0,
              headerBulkMenu:
                bulkSelection.length > 0
                  ? ({ setOpened }) => {
                      return (
                        <>
                          <Panel.Header
                            bordered
                            size="sm"
                            title={'Bulk actions'}
                            appendContent={
                              <Typography.Caption>
                                {bulkSelection.length} Selected
                              </Typography.Caption>
                            }
                          />
                          <Panel.Body size="xs">
                            <Menu>
                              <Menu.Item
                                onClick={() => {
                                  setOpened(false);
                                }}
                                label="Dummy action"
                              />
                              <Menu.Item label="Dummy action 2" />
                              <Popover placement="right-start" id={popoverId}>
                                {({ toggle, ref, isOpened, setOpened }) => (
                                  <Menu.Item
                                    aria-controls={popoverId}
                                    aria-haspopup="true"
                                    aria-expanded={isOpened}
                                    ref={ref}
                                    label="Danger actions"
                                    onClick={() => {
                                      setOpened(true);
                                    }}
                                    onMouseLeave={toggle}
                                    onMouseOver={() => {
                                      setOpened(true);
                                    }}
                                    expandable
                                    state={isOpened ? 'expanded' : undefined}
                                  />
                                )}
                                {({ setOpened }) => (
                                  <Popover.Panel
                                    onMouseLeave={() => setOpened(false)}
                                    onMouseOver={() => setOpened(true)}
                                  >
                                    <Menu>
                                      <Menu.Item label="Dummy action 1" />
                                      <Menu.Item label="Dummy action 2" />
                                      <Menu.Item
                                        label="Remove row(s)"
                                        onClick={() => {
                                          setData((prev) =>
                                            prev.filter(
                                              (_, index) =>
                                                !bulkSelection.includes(index),
                                            ),
                                          );
                                          clear();
                                        }}
                                      />
                                    </Menu>
                                  </Popover.Panel>
                                )}
                              </Popover>
                            </Menu>
                          </Panel.Body>
                        </>
                      );
                    }
                  : undefined,
              bulkSelection,
              bulkDisabled,
              headerBulkChecked,
              onBulkCheckboxChange: (rowIndex) => {
                toggle(rowIndex);
              },
              onHeaderBulkCheckboxChange: () => {
                toggleAll();
              },
            } as TBulkContext,
          },
          { id: 'text', cellRenderer: TextRenderer, headerName: 'Text' },
          { id: 'num', cellRenderer: TextRenderer, headerName: 'Num' },
          { id: 'bool', cellRenderer: BooleanRenderer, headerName: 'Bool' },
          { id: 'text2', cellRenderer: TextRenderer, headerName: 'Text 2' },
        ]}
      />
    </VFlex>
  );
};

export const Base: Story = {
  render: () => <BulkExample />,
};
