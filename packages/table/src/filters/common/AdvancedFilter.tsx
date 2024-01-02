import * as React from 'react';

import { Form, HFlex, IconButton, Panel, Popper } from '@devoinc/genesys-ui';

type AdvancedFilterProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
};

export const AdvancedFilter: React.FC<AdvancedFilterProps> = ({
  children,
  footer,
  header,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <HFlex.Item flex="0 0 auto">
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
          ref={null}
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
    </HFlex.Item>
  );
};
