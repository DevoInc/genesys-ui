import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Popper, Box, Button, IconButton } from '@devoinc/genesys-ui';

import { Cell } from './Cell';
import { CellEditorProps } from '../../editors/declarations';

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Core/Cell',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  args: {
    colDef: {
      id: 'column',
      cellRenderer: ({ value }) => value,
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
      cellRenderer: ({ value }) => value,
      editable: true,
      cellEditor: (({ value, onChange }) => {
        const [isVisible, setIsVisible] = React.useState(false);
        return (
          <Popper
            visible={isVisible}
            setIsVisible={setIsVisible}
            trigger={
              <IconButton
                hasBoldIcon
                aria-expanded={isVisible}
                aria-controls="story-id"
                aria-haspopup="true"
                icon="gi-menu_alt"
                tooltip="Open Popper"
              />
            }
          >
            <Box elevation="activated" padding="cmp-sm" width="24rem">
              <div>{String(value)}</div>
              <Box marginTop="cmp-md">
                <Button
                  colorScheme="accent"
                  onClick={() => {
                    setIsVisible(false);
                    onChange(value + 'a');
                  }}
                  wide
                >
                  Do something
                </Button>
              </Box>
            </Box>
          </Popper>
        );
      }) as React.FC<CellEditorProps>,
    },
    width: 300,
    height: 60,
    data: 'test',
  },
};
