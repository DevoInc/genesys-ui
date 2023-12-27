import * as React from 'react';

import { Box, Tag, TagGroup } from '@devoinc/genesys-ui';

import { CellRendererProps } from '../declarations';
import { ContextOptions, ContextOption } from '../../facade';

export const OptionsRenderer: React.FC<CellRendererProps> = ({
  value = [],
  colDef,
}) => {
  const realValue = Array.isArray(value) ? value : [value];
  const options = (colDef?.context as ContextOptions)?.options ?? [];
  return (
    <Box overflow="hidden">
      <TagGroup flexWrap="nowrap">
        {realValue.map((tag) => {
          const option = Object.entries(options).find(([k]) => k === tag);
          const optionParams = option ? (option[1] as ContextOption) : {};
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
