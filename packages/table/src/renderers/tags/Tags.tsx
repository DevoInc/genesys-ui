import * as React from 'react';
import { BaseTagProps, Box, Tag, TagGroup } from '@devoinc/genesys-ui';
import { CellRendererParams } from '../../declarations';

export const TagsRenderer: React.FC<CellRendererParams> = ({ value = [] }) => {
  const realValue = Array.isArray(value) ? value : [value];
  return (
    <Box overflow="hidden">
      <TagGroup flexWrap="nowrap">
        {realValue.map((tag: BaseTagProps) => {
          return (
            <Tag
              colorScheme={tag.colorScheme}
              text={tag.text}
              icon={tag.icon}
              key={tag.text}
            />
          );
        })}
      </TagGroup>
    </Box>
  );
};
