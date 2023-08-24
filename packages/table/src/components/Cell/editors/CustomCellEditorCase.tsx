import React from 'react';
import { Popper, Box, Button, IconButton } from '@devoinc/genesys-ui';
import { GenericCellEditorProps } from '../declarations';

export const CustomCellEditor: React.FC<GenericCellEditorProps> = ({
  value,
  onChange,
}) => {
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
          icon="gi-menu_alt_bold"
          tooltip="Open Popper"
        />
      }
    >
      <Box elevation="activated" padding="cmp-sm" width="24rem">
        <div>{value}</div>
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
};
