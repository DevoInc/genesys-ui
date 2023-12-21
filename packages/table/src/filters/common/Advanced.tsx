import * as React from 'react';

import { Form, IconButton, Panel, Popper } from '@devoinc/genesys-ui';

type AdvancedProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
};

export const Advanced: React.FC<AdvancedProps> = ({
  children,
  footer,
  header,
}) => {
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
          bordered: true,
          renderContent: footer,
        }}
        headerSettings={{
          renderContent: header,
        }}
      >
        <Form padding="cmp-sm">{children}</Form>
      </Panel>
    </Popper>
  );
};
