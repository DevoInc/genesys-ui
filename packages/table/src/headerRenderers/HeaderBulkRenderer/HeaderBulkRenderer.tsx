import * as React from 'react';

import { GIAngleDown } from '@devoinc/genesys-icons';
import {
  CheckboxControl,
  Popover,
  HFlex,
  IconButton,
} from '@devoinc/genesys-ui';

import type { THeaderRenderer } from '../../declarations';
import type { TBulkContext } from '../../facade';

export const HeaderBulkRenderer: React.FC<THeaderRenderer> = ({ colDef }) => {
  const context = colDef?.context as TBulkContext;
  const checked = context?.headerBulkChecked as boolean;
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
        disabled={context?.headerDisabled}
      />
      {context?.headerBulkMenu && (
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
          {({ setOpened, toggle, isOpened }) => (
            <Popover.Panel padding="0">
              {context.headerBulkMenu({ setOpened, toggle, isOpened })}
            </Popover.Panel>
          )}
        </Popover>
      )}
    </HFlex>
  );
};
