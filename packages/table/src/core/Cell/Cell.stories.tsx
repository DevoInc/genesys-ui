import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { GIMenuAlt } from '@devoinc/genesys-icons';

import { Box, Button, IconButton, Popover } from '@devoinc/genesys-ui';

import { Cell } from './Cell';
import type { CellEditorProps } from '../../declarations';

const meta: Meta<typeof Cell> = {
  title: 'Components/Layout/Table/Core/Cell',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  args: {
    colDef: {
      id: 'column',
      cellRenderer: ({ value }) => String(value),
    },
    width: 300,
    height: 60,
    data: 'test',
  },
};

export const Editor: Story = {
  args: {
    colDef: {
      id: 'column',
      cellRenderer: ({ value }) => String(value),
      editable: true,
      cellEditor: (({ value, onChange }) => {
        const popoverId = 'story-id';
        return (
          <Popover id={popoverId} placement="top-start">
            {({ toggle, ref, isOpened }) => (
              <IconButton
                hasBoldIcon
                aria-controls={popoverId}
                aria-expanded={isOpened}
                aria-haspopup={true}
                onClick={toggle}
                ref={ref}
                state={isOpened ? 'expanded' : undefined}
                icon={<GIMenuAlt />}
                tooltip="Open Popover"
              />
            )}
            {({ setOpened }) => (
              <Popover.Panel>
                <Box padding="cmp-sm">
                  <div>{String(value)}</div>
                  <Box marginTop="cmp-md">
                    <Button
                      colorScheme="accent"
                      onClick={() => {
                        setOpened(false);
                        onChange(`${String(value)}a`);
                      }}
                      wide
                    >
                      Do something
                    </Button>
                  </Box>
                </Box>
              </Popover.Panel>
            )}
          </Popover>
        );
      }) as React.FC<CellEditorProps>,
    },
    width: 300,
    height: 60,
    data: 'test',
  },
};
