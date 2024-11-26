import * as React from 'react';

import { Box, Tag, TagGroup } from '@devoinc/genesys-ui';

import type { TCellExpand } from '../../declarations';
import type { TContextOptions, TContextOption } from '../../facade';

export const OptionsExpand: React.FC<TCellExpand> = ({
  value = [],
  colDef,
}) => {
  const realValue = Array.isArray(value) ? value : [value];
  const options = (colDef?.context as TContextOptions)?.options ?? [];
  return (
    <Box overflow="hidden">
      <TagGroup flexWrap="wrap">
        {realValue.map((tag: string) => {
          const option = Object.entries(options).find(([k]) => k === tag);
          const optionParams = option ? (option[1] as TContextOption) : {};
          return (
            <Tag
              colorScheme={optionParams?.colorScheme}
              text={optionParams?.label ?? tag}
              icon={optionParams?.icon as string}
              key={tag}
            />
          );
        })}
      </TagGroup>
    </Box>
  );
};
