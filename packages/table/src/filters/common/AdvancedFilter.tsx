import * as React from 'react';

import {
  Form,
  HFlex,
  IconButton,
  Panel,
  Popover,
  PopoverProps,
} from '@devoinc/genesys-ui';
import { GIFilter } from '@devoinc/genesys-icons';

type AdvancedFilterProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  id: PopoverProps['id'];
};

export const AdvancedFilter: React.FC<AdvancedFilterProps> = ({
  children,
  footer,
  header,
  id,
}) => {
  return (
    <HFlex.Item flex="0 0 auto">
      <Popover id={id} placement="bottom-start">
        {({ toggle, ref, isOpened }) => (
          <IconButton
            aria-controls={id}
            aria-expanded={isOpened}
            aria-haspopup="true"
            icon={<GIFilter />}
            onClick={toggle}
            ref={ref}
            state={isOpened ? 'expanded' : undefined}
            size="sm"
            colorScheme="quiet"
            hasBadge={true}
          />
        )}
        <Panel maxHeight="34rem" elevation="activated" size="sm" width="28rem">
          <Panel.Header>{header}</Panel.Header>
          <Panel.Body>
            <Form padding="cmp-sm">{children}</Form>
          </Panel.Body>
          <Panel.Footer bordered>{footer}</Panel.Footer>
        </Panel>
      </Popover>
    </HFlex.Item>
  );
};
