import * as React from 'react';
import { BaseTagProps, Tag, TagGroup } from '@devoinc/genesys-ui';
import { CellRendererParams } from '../../declarations';

export const TagsRenderer: React.FC<CellRendererParams> = ({ value = [] }) => {
  const realValue = Array.isArray(value) ? value : [value];
  return (
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
  );
};
