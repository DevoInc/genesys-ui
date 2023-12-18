import * as React from 'react';

import { Button, Form, IconButton, Panel, Popper } from '@devoinc/genesys-ui';

type AdvancedProps = {
  children: React.ReactNode;
};

export const Advanced: React.FC<AdvancedProps> = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <Popper
      visible={isVisible}
      setIsVisible={setIsVisible}
      placement={'top-end'}
      trigger={
        <IconButton
          icon="gi-filter"
          size="sm"
          colorScheme="quiet"
          aria-expanded={isVisible}
          aria-controls="story-id"
          aria-haspopup="true"
        />
      }
    >
      <Panel
        maxHeight="34rem"
        bodySettings={{
          removeSpace: true,
        }}
        elevation="activated"
        size="sm"
        id="story-id"
        width={'28rem'}
        footerSettings={{
          actions: [
            <Button key={1} size="sm" colorScheme="accent">
              Reset
            </Button>,
          ],
        }}
      >
        <Form padding="cmp-sm">{children}</Form>
      </Panel>
    </Popper>
  );
};
