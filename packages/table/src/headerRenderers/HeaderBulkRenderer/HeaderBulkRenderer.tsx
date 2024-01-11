import * as React from 'react';

import { GIAngleDown } from '@devoinc/genesys-icons';
import {
  CheckboxControl,
  Popover,
  HFlex,
  IconButton,
} from '@devoinc/genesys-ui';

import { HeaderRendererProps } from '../declarations';
import { BulkContext } from '../../facade';

export const HeaderBulkRenderer: React.FC<HeaderRendererProps> = ({
  colDef,
}) => {
  const context = colDef?.context as BulkContext;
  const checked =
    context?.headerBulkChecked ?? false
      ? context.headerBulkChecked === 'indeterminate'
        ? true
        : true
      : false;
  const popoverId = `${colDef.id}-bulk-actions-menu`;
  return (
    <HFlex spacing="cmp-xxs">
      <CheckboxControl
        onChange={(event) => {
          if (context?.onHeaderBulkCheckboxChange) {
            context.onHeaderBulkCheckboxChange(event);
          }
        }}
        indeterminate={context?.headerBulkChecked === 'indeterminate'}
        checked={checked}
        aria-label="Select all rows"
      />
      {(context?.headerBulkMenu ?? false) && (
        <Popover id={popoverId} placement="bottom-start">
          {({ isOpened, toggle, ref }) => (
            <IconButton
              aria-controls={popoverId}
              aria-haspopup="true"
              aria-label="Open the bulk actions menu"
              aria-expanded={isOpened}
              size={'xs'}
              onClick={toggle}
              ref={ref}
              state={isOpened ? 'expanded' : undefined}
            >
              <GIAngleDown size="12" />
            </IconButton>
          )}
          <Popover.Panel>{context.headerBulkMenu}</Popover.Panel>
        </Popover>
      )}
    </HFlex>
  );
};
