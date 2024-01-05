import * as React from 'react';

import { GIAngleDown } from '@devoinc/genesys-icons';
import {
  CheckboxControl,
  Dropdown,
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
        <Dropdown placement="bottom-start" width={'200px'}>
          {({ toggle, ref }) => (
            <IconButton size={'xs'} onClick={toggle} ref={ref}>
              <GIAngleDown size="12" />
            </IconButton>
          )}
          {context.headerBulkMenu}
        </Dropdown>
      )}
    </HFlex>
  );
};
